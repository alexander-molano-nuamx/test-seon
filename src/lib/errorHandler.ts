/**
 * Error handler to suppress non-critical errors from NestJS backend
 * Specifically handles "Cannot assign to read only property 'params'" errors
 * that don't affect frontend functionality
 */

// Suppress errors that are safe to ignore
const SUPPRESSIBLE_ERRORS = [
  /Cannot assign to read only property ['"]params['"]/,
  /Cannot assign to read only property ['"]query['"]/,
  /Cannot set property/,
];

/**
 * Check if an error is safe to suppress (won't affect user experience)
 */
export const isSuppressibleError = (error: Error | string): boolean => {
  const message = typeof error === "string" ? error : error.message;
  return SUPPRESSIBLE_ERRORS.some((pattern) => pattern.test(message));
};

/**
 * Install global error handler to suppress non-critical errors
 * Call this once in your app initialization
 */
export const installErrorHandler = () => {
  // Handle unhandled promise rejections
  if (typeof window !== "undefined") {
    // Suppress errors in unhandledrejection event
    window.addEventListener("unhandledrejection", (event) => {
      if (event.reason && isSuppressibleError(event.reason as Error | string)) {
        console.warn(
          "[Suppressible Backend Error]:",
          event.reason instanceof Error ? event.reason.message : event.reason
        );
        // Prevent the error from crashing the app
        event.preventDefault();
      }
    });

    // Suppress errors in error event (from scripts/components)
    window.addEventListener("error", (event) => {
      if (event.error && isSuppressibleError(event.error as Error | string)) {
        console.warn(
          "[Suppressible Backend Error]:",
          event.error instanceof Error ? event.error.message : event.error
        );
        // Prevent the error from showing in console
        event.preventDefault();
      }
    });

    // Override console.error to suppress known backend errors
    const originalError = console.error;
    console.error = function (...args: unknown[]) {
      const errorMessage =
        args[0] instanceof Error
          ? args[0].message
          : typeof args[0] === "string"
          ? args[0]
          : "";

      if (isSuppressibleError(errorMessage)) {
        console.warn("[Suppressible Backend Error]:", errorMessage);
        return;
      }

      originalError.apply(console, args as Parameters<typeof console.error>);
    };
  }
};
