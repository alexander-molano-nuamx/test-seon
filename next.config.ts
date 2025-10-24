import type { NextConfig } from "next";

const getNextAuthUrl = () => {
  // 1. Si está definida manualmente, usarla (mayor prioridad)
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }

  // 2. Si es producción en Vercel
  if (process.env.VERCEL_ENV === "production") {
    return "https://test-seon.vercel.app";
  }

  // 3. Si es preview en Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 4. Desarrollo local
  return "http://localhost:3000";
};

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  env: {
    NEXTAUTH_URL: getNextAuthUrl(),
  },
  // Redirecciones útiles
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
