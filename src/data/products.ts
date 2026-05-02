import lifejacket from "@/assets/services/lifejacket.jpg";
import fireExtinguishers from "@/assets/services/fire-extinguishers.jpg";
import safetyBoots from "@/assets/services/safety-boots.jpg";
import respiratorMask from "@/assets/services/respirator-mask.jpg";
import breathingDevice from "@/assets/services/breathing-device.jpg";
import immersionSuit from "@/assets/services/immersion-suit.jpg";
import firemanHelmet from "@/assets/services/fireman-helmet.jpg";
import fireHose from "@/assets/services/fire-hose.jpg";
import portwestFw23 from "@/assets/services/portwest-fw23.webp";
import portwestFc18 from "@/assets/services/portwest-fc18.webp";
import jallatteJalaska from "@/assets/services/jallatte-jalaska.jpg";
import jallatteJalterre from "@/assets/services/jallatte-jalterre.jpg";
import jallatteJaltano from "@/assets/services/jallatte-jaltano.jpg";
import v12Otter from "@/assets/services/v12-otter.webp";
import compressor300 from "@/assets/services/compressor-300.jpg";
import fr21Coverall from "@/assets/services/fr21-coverall.png";


export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  specifications: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: "colete-salva-vidas",
    name: "Colete Salva-Vidas",
    category: "maritime",
    image: lifejacket,
    description: "Coletes infláveis e de espuma certificados SOLAS/MED",
    fullDescription: "Os nossos coletes salva-vidas são projetados para oferecer a máxima segurança em ambientes marítimos extremos. Certificados pelas normas SOLAS e MED, garantem flutuabilidade superior e visibilidade em condições adversas.",
    specifications: [
      "Material: Nylon de alta resistência",
      "Flutuabilidade: > 150N",
      "Certificação: SOLAS / MED / ISO",
      "Peso: 0.8kg"
    ],
    features: [
      "Sistema de inflação automática e manual",
      "Fitas refletoras de alta visibilidade",
      "Apito de emergência integrado",
      "Luz de sinalização automática"
    ]
  },
  {
    id: "extintores-incendio",
    name: "Extintores de Incêndio",
    category: "fire",
    image: fireExtinguishers,
    description: "ABC, CO2, Espuma e Água - todos os tamanhos",
    fullDescription: "Gama completa de extintores de alta eficiência para todos os tipos de fogos. Equipamentos robustos e de fácil utilização, ideais para ambientes industriais, marítimos e comerciais.",
    specifications: [
      "Capacidade: 1kg a 50kg",
      "Agente Extintor: Pó Químico, CO2, Espuma",
      "Pressão de Serviço: 15 bar",
      "Norma: EN3-7 / CE"
    ],
    features: [
      "Manómetro de alta precisão",
      "Mangueira flexível resistente",
      "Válvula de segurança integrada",
      "Suporte de fixação incluído"
    ]
  },
  {
    id: "portwest-fw23",
    name: "Portwest FW23 - Bota Kumo Steelite S3",
    category: "epi",
    image: portwestFw23,
    description: "Bota de segurança em pele durável com biqueira de aço S3 SRC",
    fullDescription: "A bota Kumo S3 está fabricada com couro impermeável, permitindo manter os pés secos em condições húmidas. Contempla uma conveniente protecção através de uma biqueira de aço de 200 joules, palmilha em aço e um tacão antiderrapante e absorvente de energia.",
    specifications: [
      "Material Superior: Pele durável",
      "Material da Sola: PU/PU",
      "Certificação: EN ISO 20345: 2011 S3",
      "Biqueira: Aço (200J)",
      "Sola Intermédia: Compósito resistente a perfurações"
    ],
    features: [
      "Impermeável e resistente à água",
      "Sola antiderrapante (SRC)",
      "Antiestático e absorção de energia no tacão",
      "Sola resistente a combustível e óleo"
    ]
  },
  {
    id: "portwest-fc18",
    name: "Portwest FC18 - Apex Composite Mid Boot S3S ESD",
    category: "epi",
    image: portwestFc18,
    description: "Bota 100% não metálica com proteção ESD e certificação HRO/SR/SC/FO",
    fullDescription: "Bota de segurança de alta performance da coleção CompositeLite. Combina proteção total isenta de metal com resistência superior ao calor (300ºC) e propriedades dissipativas ESD. O padrão de piso foi desenhado para máxima agilidade em terrenos irregulares e superfícies oleosas.",
    specifications: [
      "Material Superior: Pele durável de alta qualidade",
      "Sola: PU/Borracha resistente a 300ºC (HRO)",
      "Normas: EN ISO 20345:2022 S3S, IEC 61340-5-1:2016",
      "Códigos Técnicos: HRO, SR, SC, FO",
      "Biqueira: Compósito não metálico (200J)"
    ],
    features: [
      "100% Não Metálica - Ideal para aeroportos e zonas de segurança",
      "Proteção ESD - Dissipação de eletricidade estática",
      "Acabamento Reflector - Maior visibilidade e segurança",
      "Capa Protetora (SC) - Reforço frontal para maior durabilidade",
      "Resistente à Água e Óleo - Proteção em ambientes exigentes",
      "Camada de Conforto - Acolchoamento que reduz a fadiga dos pés"
    ]
  },
  {
    id: "jallatte-jalaska",
    name: "Jallatte JALASKA SAS S3 SRC (00J0266)",
    category: "epi",
    image: jallatteJalaska,
    description: "Bota de cano alto em pele integral AP 23 exclusiva (mais espessa e resistente)",
    fullDescription: "A JALASKA é um modelo icónico da Jallatte, fabricada em pele integral AP 23 exclusiva, que é 10 a 15% mais espessa que a maioria das peles de segurança (2.4mm). Oferece resistência superior à penetração de água e óleos, com uma sola Softane™ de dupla densidade para máximo conforto e durabilidade.",
    specifications: [
      "Material: Pele integral AP 23 (Tratamento Hidrorrepelente e Oleorrepelente)",
      "Biqueira: Aço Perfurado (Patenteada) - 200J",
      "Palmilha: Aço Inoxidável resistente a perfurações",
      "Sola: Softane™ Dual Density com absorção progressiva",
      "Normas: EN ISO 20345:2011 S3 SRC"
    ],
    features: [
      "Pele AP 23 - Exclusividade Jallatte 10-15% mais espessa",
      "Absorção de Choque - 29 Joules no calcanhar para proteger articulações",
      "Resistência Química - Altamente resistente a óleos e hidrocarbonetos",
      "Ajuste Rápido - 2 pegas laterais para calçar rapidamente",
      "Resistência à Abrasão - Sola de alta densidade (1.02)",
      "Conforto Térmico - Palmilha interior tratada anti-bacteriana"
    ]
  },
  {
    id: "jallatte-jalterre",
    name: "Jallatte JALTERRE SAS S3 GORE-TEX (JJV31)",
    category: "epi",
    image: jallatteJalterre,
    description: "Bota GORE-TEX® de alta performance com sola Vibram® antiderrapante",
    fullDescription: "A JALTERRE é uma bota de segurança para condições extremas. Equipada com membrana GORE-TEX® Performance Comfort para impermeabilidade total e respirabilidade, e sola Vibram® J-ESCAPE com composto Néotril™ resistente a temperaturas de 300ºC. É 100% não metálica, combinando leveza e proteção máxima.",
    specifications: [
      "Membrana: GORE-TEX® Performance Comfort Footwear",
      "Sola: Vibram® J-ESCAPE (Néotril™) resistente a 300ºC (HRO)",
      "Biqueira: Polímero Sintético (Tipo B) - 50% mais leve que aço",
      "Palmilha: FleXtane™ By Jallatte (100% Compósito e Antiestática)",
      "Normas: EN ISO 20345:2011 S3 CI HI WR HRO SRC"
    ],
    features: [
      "100% Metal-Free - Amagnética e não condutora de calor/frio",
      "Membrana GORE-TEX - Pés sempre secos e ventilados",
      "Sola Vibram - Aderência excecional em superfícies oleosas e instáveis",
      "Tecnologia BASF - Palmilha interior com espuma de memória",
      "Proteção Contra Calor - Sola resistente ao calor por contacto (300ºC)",
      "Absorção de Choque - Calcanhar com amortecedor progressivo"
    ]
  },
  {
    id: "jallatte-jaltano",
    name: "Jallatte JALTANO SAS ESD S3 (JYJY496)",
    category: "epi",
    image: jallatteJaltano,
    description: "Bota Synergy com tecnologia anti-fadiga Infinergy® da BASF",
    fullDescription: "A JALTANO é uma bota de segurança estilo hiking desenhada com tecnologia anti-fadiga. A sola Synergy inclui um inserto em TPU Expandido Infinergy® da BASF, capaz de restituir mais de 55% da energia em cada passo, reduzindo drasticamente o cansaço. É dissipativa (ESD Classe II), protegendo equipamentos eletrónicos sensíveis.",
    specifications: [
      "Tecnologia de Sola: Synergy com BASF Infinergy® E-TPU",
      "Biqueira: PREM-Alu em Alumínio (Tipo B) - Amagnética e Leve",
      "Proteção ESD: Dissipativa (Classe II) com Link ESD™",
      "Palmilha: FleXtane™ By Jallatte ESD (100% Compósito)",
      "Normas: EN ISO 20345:2011 S3 CI SRC"
    ],
    features: [
      "Efeito Bounce - Devolve mais de 55% da energia acumulada",
      "Anti-Fadiga - Ideal para longas jornadas de trabalho de pé",
      "Forro 3D Surf - Malha respirável para ventilação periférica",
      "Pele Pull-up - Hidrorrepelente com acabamento de alta qualidade",
      "Sistema Link ESD - Dissipador inovador de eletricidade estática",
      "Conforto BASF - Palmilha interior em poliuretano dinâmico"
    ]
  },
  {
    id: "v12-otter-sts",
    name: "V12 OTTER STS S3 SRC (V6400.01)",
    category: "epi",
    image: v12Otter,
    description: "Bota ultra-leve 100% metal-free com sola de alta tração STS",
    fullDescription: "A Otter STS é uma das botas mais leves da sua classe (792g). Construída sobre uma forma ergonómica, inclui a sola STS Stability Traction System, inspirada na tecnologia de pneus de tratores para máxima estabilidade em qualquer terreno. É totalmente isenta de metal e oferece um conforto excepcional para jornadas longas.",
    specifications: [
      "Sola: V12 STS (Stability Traction System) - PU durável",
      "Peso: 792g (Baseado no tamanho 42)",
      "Biqueira: Compósito de ajuste largo (Isolamento Térmico)",
      "Palmilha: Material compósito tecido flexível (1100N)",
      "Normas: EN ISO 20345:2011 S3 SRC"
    ],
    features: [
      "100% Metal-Free - Ideal para zonas de segurança e aeroportos",
      "Sola STS - Tração superior em superfícies soltas e canais auto-limpantes",
      "Palmilha Dual Comfort - Canais de fluxo de ar para máxima ventilação",
      "Pele Hidrorrepelente - Macia, durável e respirável",
      "Garantia de 200 Dias - Confiança total na durabilidade V12",
      "Ladder Grips - Standards de segurança para bombeiros em escadas"
    ]
  },
  {
    id: "mascaras-respiratorias",
    name: "Máscaras Respiratórias",
    category: "epi",
    image: respiratorMask,
    description: "FFP1, FFP2, FFP3 - proteção respiratória certificada",
    fullDescription: "Máscaras de proteção contra partículas, gases e vapores. Design confortável que permite uma respiração fácil mantendo a máxima eficácia de filtragem.",
    specifications: [
      "Tipo: FFP2 / FFP3",
      "Filtragem: > 94% das partículas",
      "Norma: EN 149:2001",
      "Válvula: Opcional (Exalação)"
    ],
    features: [
      "Ajuste nasal adaptável",
      "Elásticos confortáveis",
      "Baixa resistência respiratória",
      "Compatível com outros EPIs"
    ]
  },
  {
    id: "portwest-fr21",
    name: "Fato de Macaco Ignífugo FR21 (210g)",
    category: "epi",
    image: fr21Coverall,
    description: "Proteção Multinorma Ignífuga e Anti-estática Super Leve",
    fullDescription: "Desenvolvido para as necessidades do clima extremamente quente da indústria offshore. Fabricado com tecido Bizflame™ Work inovador, este fato de macaco oferece proteção multi-padrão para ambientes perigosos com máxima leveza.",
    specifications: [
      "Tecido: Bizflame Work (99% Algodão, 1% Fibra de Carbono) - 210g",
      "Proteção Térmica: Calor radiante, convectivo e de contacto",
      "Normas: EN ISO 11612, EN ISO 11611, EN 1149-5",
      "Certificação: ASTM F1959/F1959M-12 (ATPV = 9.1cal/cm²)",
      "Fechos: Bronze durável com zip de dupla via"
    ],
    features: [
      "10 Bolsos espaçosos para arrumação versátil",
      "Costuras triplas para maior durabilidade",
      "Punhos ajustáveis por fita aderente",
      "Bolsos para joelheiras com 2 níveis de posicionamento",
      "Presilha para rádio para fácil fixação",
      "Proteção garantida para a vida útil da peça"
    ]
  },
  {
    id: "compressor-300",
    name: "Compressor de Alta Pressão (300 Bares)",
    category: "maritime",
    image: compressor300,
    description: "Compressor profissional para enchimento de garrafas de ar respirável",
    fullDescription: "Compressor de alta pressão robusto e fiável, desenhado para o enchimento de garrafas de SCBA e mergulho. Garante a máxima pureza do ar respirável de acordo com as normas internacionais.",
    specifications: [
      "Pressão de Trabalho: 300 Bares",
      "Capacidade: Enchimento rápido de garrafas",
      "Filtragem: Sistema de purificação de ar multi-estágio",
      "Motor: Elétrico ou Gasolina de alta eficiência",
      "Certificação: Normas de segurança respiratória"
    ],
    features: [
      "Operação contínua de alta performance",
      "Manómetros de precisão integrados",
      "Válvulas de segurança de sobrepressão",
      "Design compacto e portátil"
    ]
  },
  {
    id: "aparelhos-respiratorios",
    name: "Aparelhos Respiratórios",
    category: "maritime",
    image: breathingDevice,
    description: "EEBD e SCBA - equipamentos de emergência",
    fullDescription: "Equipamentos de respiração autónoma (SCBA) e de escape de emergência (EEBD) essenciais para operações em atmosferas perigosas ou espaços confinados.",
    specifications: [
      "Duração: 15min (EEBD) / 45-60min (SCBA)",
      "Cilindro: Aço ou Fibra de Carbono",
      "Pressão: 300 bar",
      "Máscara: Panorâmica em silicone"
    ],
    features: [
      "Alarme sonoro de baixa pressão",
      "Arnês ergonómico ajustável",
      "Viseira anti-embaciamento e anti-riscos",
      "Fácil manutenção e recarga"
    ]
  },
  {
    id: "fato-imersao",
    name: "Fato de Imersão",
    category: "maritime",
    image: immersionSuit,
    description: "Proteção térmica para sobrevivência no mar",
    fullDescription: "Fatos de imersão de alta performance projetados para prolongar a sobrevivência em águas frias. Fabricados em neoprene de alta qualidade com flutuabilidade integrada.",
    specifications: [
      "Material: Neoprene 5mm",
      "Proteção Térmica: > 6 horas",
      "Certificação: SOLAS / MED",
      "Tamanhos: Universal / XL"
    ],
    features: [
      "Botas antiderrapantes integradas",
      "Luvas de três dedos para destreza",
      "Fecho estanque de alta resistência",
      "Alça de resgate e luz SOLAS"
    ]
  },
  {
    id: "capacete-bombeiro",
    name: "Capacete de Bombeiro",
    category: "fire",
    image: firemanHelmet,
    description: "Certificado SOLAS/MED para combate a incêndio",
    fullDescription: "Capacetes de proteção estrutural para combate a incêndios. Oferecem proteção extrema contra impactos, calor radiante e chamas, com design moderno e equilibrado.",
    specifications: [
      "Material: Termoplástico reforçado",
      "Peso: 1.5kg",
      "Viseira: Policarbonato dourado/claro",
      "Norma: EN 443 / SOLAS"
    ],
    features: [
      "Ajuste rápido de tamanho",
      "Proteção de nuca aluminizada",
      "Suporte para lanterna e rádio",
      "Excelente ventilação interna"
    ]
  },
  {
    id: "mangueiras-hidrantes",
    name: "Mangueiras e Hidrantes",
    category: "fire",
    image: fireHose,
    description: "Sistemas completos de combate a incêndio",
    fullDescription: "Mangueiras de alta pressão e acessórios para sistemas de hidrantes. Resistentes a abrasão, produtos químicos e condições climatéricas extremas.",
    specifications: [
      "Diâmetro: 1.5\" / 2.0\" / 2.5\"",
      "Pressão de rebentamento: 60 bar",
      "Material: Revestimento em borracha nitrílica",
      "Acoplamentos: Storz / Guillemin / Machino"
    ],
    features: [
      "Alta resistência à torção",
      "Leve e fácil de manusear",
      "Manutenção reduzida",
      "Disponível em vários comprimentos"
    ]
  }
];
