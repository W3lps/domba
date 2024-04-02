import { instituicaoRepository } from "../repository/InstituicaoRepository";

async function getAllInstituicoes(request: Request) {
    const response = await instituicaoRepository.findAll();
    return new Response(JSON.stringify(response), { status: 200 });
}

async function getInstituicaoById(request: Request, id: string) {
    if (!id) {
        return new Response("Faltando o id da Instituicao.", {
            status: 400,
        });
    }

    const response = await instituicaoRepository.findById(id);
    return new Response(JSON.stringify(response), { status: 200 });
}

async function registerInstituicao(request: Request) {
    const body = await request.json();
    const instituicao = body;
    const response = await instituicaoRepository.save(instituicao);
    return new Response(JSON.stringify(response), { status: 201 });
}

interface InstituicaoController {
    getAllInstituicoes: (request: Request) => Promise<Response>;
    getInstituicaoById: (request: Request, id: string) => Promise<Response>;
    registerInstituicao: (request: Request) => Promise<Response>;
}

export const instituicaoController: InstituicaoController = {
    getAllInstituicoes,
    getInstituicaoById,
    registerInstituicao,
};