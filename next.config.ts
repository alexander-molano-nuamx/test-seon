import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(), // Establece el directorio raíz correcto
  },
  // Otras configuraciones si las necesitas
};

export default nextConfig;
