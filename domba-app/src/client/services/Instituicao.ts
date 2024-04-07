import { instituicaoSchema } from "@/server/schema/instituicao";

function getInstituicao(): Promise<Instituicao[]> {
  return fetch("http://localhost:3000/api/instituicao").then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const instituicaoReponse = await response.json();
    const instituicao = instituicaoSchema.array().safeParse(instituicaoReponse);
    if (!instituicao.success) {
      throw new Error("Erro ao buscar instituições");
    }

    return instituicao.data;
  });
}

function getInstituicaoByInstituicaoTipoId(instituicaoTipoId: string[]): Promise<Instituicao[]> {
  return fetch(`http://localhost:3000/api/instituicao/instituicao-tipo/${instituicaoTipoId}`).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const instituicaoReponse = await response.json();
    const instituicao = instituicaoSchema.array().safeParse(instituicaoReponse);
    if (!instituicao.success) {
      throw new Error("Erro ao buscar instituições");
    }

    return instituicao.data;
  });
}

interface InstituicaoService {
  getInstituicao: () => Promise<Instituicao[]>;
  getInstituicaoByInstituicaoTipoId: (instituicaoTipoId: string[]) => Promise<Instituicao[]>;
}

export const instituicaoService: InstituicaoService = {
  getInstituicao,
  getInstituicaoByInstituicaoTipoId,
};
