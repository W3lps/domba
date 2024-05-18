import { Usuario } from "@/server/schema/Usuario";

const jwt = require("jsonwebtoken");

function createToken(usuario: Usuario): string {
  const token = jwt.sign({ id: usuario.id, email: usuario.email }, "secret", {
    expiresIn: "1h",
  });

  return token;
}

async function verifyToken(token: string) {
  // verify if the token is valid
  jwt.verify(token, "secret", (err: any) => {
    if (err) {
      return new Response("Token inválido", { status: 401 });
    }
  });
}

interface InfraSecurity {
  createToken: (usuario: Usuario) => string;
  verifyToken: (token: string) => void;
}

export const infraSecurity: InfraSecurity = {
  createToken,
  verifyToken,
};
