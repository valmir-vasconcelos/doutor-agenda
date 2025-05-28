import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // para uso com api separada
  // baseURL: "http://localhost:3000/api/auth",
  // baseURL: process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:3000/api/auth",
});
