import { Usuario } from "@/server/schema/Usuario";

const jwt = require("jsonwebtoken");

function createToken(usuario: Usuario): string {
  const token = jwt.sign({ id: usuario.id, email: usuario.email }, "secret", {
    expiresIn: "1h",
  });

  return token;
}

function verifyToken(token: string) {
  const decoded = jwt.verify(token, "secret");

  if (!decoded) {
    throw new Error("Token inválido.");
  }

  // verify if the token is valid
  jwt.verify(token, "secret", (err: any) => {
    if (err) {
      console.log(err);
      throw new Error("Token inválido.");
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
