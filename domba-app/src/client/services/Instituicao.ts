function getInstituicao(): Promise<any> {
  return fetch("http://localhost:3000/api").then(async (response) => {
    console.log("teste");
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const supabaseResponse = await response.json();
    return supabaseResponse;
  });
}

interface InstituicaoService {
  getInstituicao: () => Promise<any>;
}

export const instituicaoService: InstituicaoService = {
  getInstituicao,
};
