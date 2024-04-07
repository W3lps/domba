export interface GlobalContextProps {
  children: React.ReactNode;
}

export interface GlobalContextData {
  instituicao: Instituicao[];
  setInstituicao: (instituicao: Instituicao[]) => void;
  instituicaoTipoSelecionado: string[];
  setInstituicaoTipoSelecionado: (instituicaoTipoSelecionado: string[]) => void;
  instituicaoNome: string;
  setInstituicaoNome: (instituicaoNome: string) => void;
}
