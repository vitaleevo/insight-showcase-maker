export interface Service {
  id: string;
  title: string;
  subtitle: string;
  services: string[];
  fullDescription: string;
}

export const serviceData: Service[] = [
  {
    id: "balsa-salva-vidas",
    title: "Balsa Salva-Vidas (Liferaft)",
    subtitle: "Venda, Aluguer e Manutenção",
    services: [
      "Fornecimento de balsas certificadas",
      "Aluguer temporário para operações",
      "Manutenção preventiva e corretiva",
      "Inspeção anual obrigatória"
    ],
    fullDescription: "A ALMAFRANS oferece soluções completas para balsas salva-vidas. Somos parceiros das principais marcas mundiais, garantindo que o seu equipamento está pronto para ser utilizado no momento crítico. Os nossos técnicos são formados pelos fabricantes e autorizados pelas autoridades marítimas."
  },
  {
    id: "aparelhos-respiratorios",
    title: "Aparelhos Respiratórios",
    subtitle: "Inspeção e Manutenção",
    services: [
      "Inspeção anual de EEBD",
      "Inspeção anual de SCBA",
      "Calibração de Detetor de Gás",
      "Manutenção anual de compressor de ar respirável"
    ],
    fullDescription: "Segurança em atmosferas tóxicas ou com deficiência de oxigénio é vital. Realizamos a manutenção e calibração de aparelhos respiratórios autónomos (SCBA) e de escape (EEBD), garantindo que a qualidade do ar e a integridade do equipamento cumprem os requisitos de segurança."
  },
  {
    id: "gases-medicinais",
    title: "Gases Medicinais",
    subtitle: "Cilindros e Recarga",
    services: [
      "Inspeção anual de Cilindros",
      "Medicinal e de Ar Respirável",
      "Recarga de cilindros Medicinal e de Ar Respirável",
      "Teste hidráulico de Cilindro de ar Medicinal"
    ],
    fullDescription: "Fornecemos e recarregamos cilindros de gases medicinais e ar respirável. O nosso processo de recarga segue normas rigorosas de pureza, garantindo que o gás fornecido é seguro para uso humano em emergências médicas."
  },
  {
    id: "gases-industriais",
    title: "Gases Industriais",
    subtitle: "Acetileno e Sistemas Fixos",
    services: [
      "Recarga de Cilindro Acetileno",
      "Inspeção anual do Sistema fixo de Acetileno",
      "Fornecimento de gases industriais",
      "Manutenção de sistemas"
    ],
    fullDescription: "Suporte completo para sistemas de gases industriais. Desde o fornecimento de acetileno até à manutenção de redes e sistemas fixos, asseguramos a operacionalidade e segurança dos seus processos industriais."
  },
  {
    id: "combate-a-incendio-servicos",
    title: "Combate a Incêndio",
    subtitle: "Equipamentos e Manutenção",
    services: [
      "Análise de espuma de combate a incêndios",
      "Inspeção Anual e manutenção de Extintor de Incêndio",
      "Recarga de extintores de 1kg á 50kg",
      "Recarga de garrafa de CO2",
      "Inspeção anual do sistema fixo CO2",
      "Serviço de teste hidráulico em Extintor de Incêndio",
      "Recarga de garrafa de nitrogénio"
    ],
    fullDescription: "A nossa divisão de combate a incêndios é especializada na manutenção de toda a frota de extintores e sistemas fixos. Realizamos testes hidráulicos e análises laboratoriais de espuma para garantir a eficácia total em caso de sinistro."
  },
  {
    id: "equipamento-protecao-pessoal",
    title: "Equipamento de Proteção Pessoal",
    subtitle: "EPI's Especializados",
    services: [
      "Inspeção anual nos fatos de imersão",
      "Manutenção anual de lifejackets",
      "Inspeção anual de trajes químicos",
      "Fornecimento de EPI's certificados"
    ],
    fullDescription: "Mais do que fornecer, nós mantemos. Realizamos a inspeção anual obrigatória em fatos de imersão, coletes e trajes de proteção química, emitindo os respetivos certificados de conformidade exigidos pelas seguradoras e autoridades."
  },
  {
    id: "gestao-de-armazem",
    title: "Gestão de Armazém",
    subtitle: "Controlo e Otimização",
    services: [
      "Controlo Físico do Armazém",
      "Dimensionamento do Layout do Armazém",
      "Layout do Armazém com Auxílio do computador",
      "Dimensionamento do Espaço",
      "Redução de custos do Armazém",
      "Manutenção e treinamento",
      "Método curva ABC",
      "Acurácia do inventário"
    ],
    fullDescription: "Consultoria especializada em logística e gestão de stocks. Ajudamos a sua empresa a otimizar o espaço, reduzir custos de armazenamento e implementar métodos modernos de controlo de inventário para máxima eficiência operacional."
  }
];
