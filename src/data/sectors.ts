export interface Sector {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
}

export const sectorData: Sector[] = [
  {
    id: "industria-e-mineracao",
    title: "Indústria e Mineração",
    description: "Soluções robustas para ambientes de alta exigência técnica e operacional.",
    fullDescription: "No setor industrial e de mineração, a segurança é a prioridade absoluta. A ALMAFRANS fornece equipamentos de proteção individual (EPIs) de alta resistência, sistemas de supressão de incêndio para maquinaria pesada e consultoria especializada em gestão de riscos para garantir a continuidade das operações com o mínimo de incidentes."
  },
  {
    id: "petroleo-e-gas",
    title: "Petróleo e Gás",
    description: "Equipamentos certificados para operações Onshore e Offshore com segurança total.",
    fullDescription: "O setor de Oil & Gas exige certificações rigorosas e equipamentos que suportem condições extremas. Fornecemos fatos de imersão, sistemas de respiração SCBA/EEBD e serviços de manutenção certificados SOLAS/MED para plataformas e refinarias, assegurando conformidade total com as normas internacionais de segurança marítima e industrial."
  },
  {
    id: "maritimo",
    title: "Marítimo",
    description: "Suporte completo para embarcações e frotas comerciais em águas angolanas.",
    fullDescription: "Como especialistas em segurança marítima, oferecemos uma gama completa de produtos e serviços para navios e embarcações de apoio. Desde a venda e aluguer de balsas salva-vidas até à inspeção de coletes e pirotecnia, a ALMAFRANS é o parceiro de confiança para manter a sua frota segura e navegável."
  },
  {
    id: "portuario",
    title: "Portuário",
    description: "Logística e segurança integrada para operações de terminais e portos.",
    fullDescription: "As operações portuárias são o coração do comércio externo. Apoiamos terminais com soluções de proteção contra incêndio, equipamentos de resgate e consultoria em gestão de armazéns, ajudando a otimizar a segurança e a eficiência logística no manuseamento de cargas e operações de cais."
  }
];
