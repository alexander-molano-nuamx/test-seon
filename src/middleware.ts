export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/PageGestAcepCes/:path*",
    "/PageIngresoAcep/:path*",
    "/SelectorRole/:path*",
    // Agrega aquí todas las rutas que quieres proteger
  ],
};
