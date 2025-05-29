import { customSessionClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { auth } from "./auth";

export const authClient = createAuthClient({
  // Configurações do cliente de autenticação
  plugins: [customSessionClient<typeof auth>()],

  // para uso com api separada
  // baseURL: "http://localhost:3000/api/auth",
  // baseURL: process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:3000/api/auth",
});
