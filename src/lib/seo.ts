import { products } from "@/data/products";
import { serviceData } from "@/data/services";
import { sectorData } from "@/data/sectors";

export const SITE_URL = "https://www.almafrans.ao";

export interface PageMetadata {
  path: string;
  title: string;
  description: string;
  indexable: boolean;
}

const summarize = (text: string) =>
  text.length <= 160 ? text : `${text.slice(0, 157).replace(/\s+\S*$/, "")}…`;

export const indexablePages: PageMetadata[] = [
  {
    path: "/",
    title: "ALMAFRANS | Segurança Industrial e Marítima em Angola",
    description: "ALMAFRANS - Empresa 100% angolana especializada em segurança marítima, combate a incêndio, gases industriais e equipamentos de proteção. ISO 9001 certificada.",
    indexable: true,
  },
  {
    path: "/calcado-seguranca",
    title: "Calçado de Segurança Profissional em Angola | ALMAFRANS",
    description: "Botas de segurança Portwest, Jallatte e V12 para ambientes industriais e offshore em Angola. Conheça os modelos e contacte a ALMAFRANS.",
    indexable: true,
  },
  ...products.map((product) => ({
    path: `/product/${product.id}`,
    title: `${product.name} | ALMAFRANS Angola`,
    description: summarize(`${product.description}. ${product.fullDescription}`),
    indexable: true,
  })),
  ...serviceData.map((service) => ({
    path: `/service/${service.id}`,
    title: `${service.title}: ${service.subtitle} | ALMAFRANS`,
    description: summarize(`${service.subtitle}. ${service.fullDescription}`),
    indexable: true,
  })),
  ...sectorData.map((sector) => ({
    path: `/sector/${sector.id}`,
    title: `${sector.title} | ALMAFRANS Angola`,
    description: sector.description,
    indexable: true,
  })),
];

export const getPageMetadata = (pathname: string): PageMetadata => {
  const path = pathname.replace(/\/+$/, "") || "/";
  return indexablePages.find((page) => page.path === path) ?? {
    path,
    title: "Página não encontrada | ALMAFRANS",
    description: "A página solicitada não foi encontrada. Consulte os produtos, serviços e contactos da ALMAFRANS.",
    indexable: false,
  };
};
