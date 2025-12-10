import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
    role: "manager",
    company: "Operaciones",
  },
  {
    id: "4",
    email: "usuario1@sab.com",
    password: "SabOper2024",
    name: "Usuario Inteligo",
    role: "operator",
    company: "Inteligo",
  },
];

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
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Credenciales incompletas");
        }

        const user = VALID_USERS.find((u) => u.email === credentials.email);

        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        if (user.password !== credentials.password) {
          throw new Error("Contraseña incorrecta");
        }

        // Obtener IP
        const forwarded = req?.headers?.["x-forwarded-for"];
        const ip = forwarded
          ? (forwarded as string).split(",")[0]
          : (req?.headers?.["x-real-ip"] as string) || "No disponible";

        const now = new Date().toISOString();

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          company: user.company,
          lastLogin: now,
          lastIp: ip,
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.company = user.company;
        token.lastLogin = user.lastLogin;
        token.lastIp = user.lastIp;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.company = token.company as string;
        session.user.lastLogin = token.lastLogin as string;
        session.user.lastIp = token.lastIp as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
