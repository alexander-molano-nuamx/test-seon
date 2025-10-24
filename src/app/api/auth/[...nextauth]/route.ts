import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Usuarios válidos del sistema
const VALID_USERS = [
  {
    id: "1",
    email: "admin@seon.com",
    password: "Admin123",
    name: "Administrador SEON",
    role: "admin",
    company: "SEON",
  },
  {
    id: "2",
    email: "usuario1@kallpa.com",
    password: "Kallpa2024",
    name: "Usuario Kallpa",
    role: "operator",
    company: "Kallpa",
  },
  {
    id: "3",
    email: "gestor@operaciones.com",
    password: "Gestor456",
    name: "Gestor de Operaciones",
    role: "operator",
    company: "Operaciones",
  },
];

// Detectar entorno automáticamente
const getAuthUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.NEXTAUTH_URL || "http://localhost:3000";
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Correo electrónico",
          type: "email",
          placeholder: "correo@ejemplo.com",
        },
        password: {
          label: "Contraseña",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Credenciales incompletas");
        }

        // Buscar usuario por email
        const user = VALID_USERS.find((u) => u.email === credentials.email);

        // Verificar si el usuario existe
        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        // Verificar contraseña
        if (user.password !== credentials.password) {
          throw new Error("Contraseña incorrecta");
        }

        // Retornar usuario sin la contraseña
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          company: user.company,
        };
      },
    }),
  ],
  pages: {
    signIn: "/", // Página de login
    error: "/", // Página de error
  },
  callbacks: {
    async jwt({ token, user }) {
      // Agregar datos del usuario al token
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.company = user.company;
      }
      return token;
    },
    async session({ session, token }) {
      // Agregar datos del token a la sesión
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.company = token.company as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development", // Debug solo en desarrollo
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
