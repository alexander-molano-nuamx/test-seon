import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    "/PageGestAcepCes/:path*",
    "/PageIngresoAcep/:path*",
    "/SelectorRole/:path*",
    "/DetalleGralOperEsp/:path*",
    // Agrega aquí todas las rutas que quieres proteger
  ],
};
