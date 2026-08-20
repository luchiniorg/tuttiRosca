import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Habilita <ViewTransition> de React para animar la navegación
    // (morph de la foto del producto de la card al detalle).
    viewTransition: true,
  },
};

export default nextConfig;
