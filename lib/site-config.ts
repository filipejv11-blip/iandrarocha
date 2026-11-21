export const SITE_CONFIG = {
  name: "Iandra Rocha | Advocacia & Consultoria Jurídica",
  shortName: "Iandra Rocha Advocacia",
  lawyerName: "Iandra Diniz Rocha",
  oab: "OAB/PB 34.774",
  // TODO: Confirmar se o domínio definitivo permanecerá https://www.iandrarocha.adv.br
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.iandrarocha.adv.br",
  description:
    "Advocacia ética e contemporânea em Direito de Família, Civil, Consumidor, Previdenciário, Trabalhista e Consultoria Jurídica. Atendimento em João Pessoa e online para todo o Brasil.",
  whatsappDigits: "5583987633502",
  phoneDisplay: "(83) 98763-3502",
  phoneSchema: "+55-83-98763-3502",
  instagramHandle: "@adv.iandrarocha",
  instagramUrl: "https://www.instagram.com/adv.iandrarocha",
  city: "João Pessoa",
  state: "PB",
  locationDisplay: "João Pessoa - PB",
} as const;

export const WHATSAPP_FLOAT_MESSAGE =
  "Olá, vim pelo site e gostaria de orientação jurídica.";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE_CONFIG.whatsappDigits}`;
  if (!message || !message.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildContactFormMessage(data: {
  name: string;
  subject: string;
  message: string;
}): string {
  return `Olá, Dra. Iandra. Meu nome é *${data.name.trim()}*.\n\n*Assunto:* ${data.subject.trim()}\n\n*Mensagem:* ${data.message.trim()}`;
}

export interface PracticeArea {
  number: string;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  iconKey: "user" | "scale" | "shield" | "award" | "briefcase" | "book";
  highlighted?: boolean;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    number: "01",
    title: "Direito de Família",
    description:
      "Divórcio, guarda, pensão alimentícia, inventário e partilha de bens. Suporte jurídico com empatia, discrição e firmeza nos momentos mais delicados da vida.",
    ctaLabel: "Tirar dúvida sobre divórcio e guarda",
    whatsappMessage:
      "Olá, Dra. Iandra. Vim pelo site e gostaria de tirar uma dúvida sobre Direito de Família (divórcio, guarda ou inventário).",
    iconKey: "user",
  },
  {
    number: "02",
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, cobranças e indenizações. Proteção dos seus direitos com estratégia.",
    ctaLabel: "Falar sobre um contrato ou indenização",
    whatsappMessage:
      "Olá, Dra. Iandra. Vim pelo site e gostaria de conversar sobre uma questão de Direito Civil (contrato ou indenização).",
    iconKey: "scale",
  },
  {
    number: "03",
    title: "Direito do Consumidor",
    description:
      "Defesa em relações de consumo, negativação indevida e danos morais contra empresas.",
    ctaLabel: "Perguntar sobre cobrança ou negativação indevida",
    whatsappMessage:
      "Olá, Dra. Iandra. Vim pelo site e gostaria de esclarecer uma dúvida sobre Direito do Consumidor (cobrança ou negativação indevida).",
    iconKey: "shield",
  },
  {
    number: "04",
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, benefícios por incapacidade e acompanhamento administrativo ou judicial. Orientação sobre benefícios e revisões do INSS.",
    ctaLabel: "Esclarecer dúvida sobre INSS",
    whatsappMessage:
      "Olá, Dra. Iandra. Vim pelo site e gostaria de esclarecer uma dúvida sobre Direito Previdenciário e INSS.",
    iconKey: "award",
  },
  {
    number: "05",
    title: "Direito Trabalhista",
    description:
      "Orientação e atuação em questões da relação de trabalho: verbas rescisórias, horas extras, vínculo empregatício, assédio e demais direitos do trabalhador. Análise individual de cada situação, com clareza e responsabilidade.",
    ctaLabel: "Tirar dúvida sobre direitos trabalhistas",
    whatsappMessage:
      "Olá, Dra. Iandra. Vim pelo site e gostaria de tirar uma dúvida sobre Direito Trabalhista.",
    iconKey: "briefcase",
  },
  {
    number: "06",
    title: "Consultoria Jurídica",
    description:
      "Orientação preventiva para pessoas físicas e jurídicas. Análise de contratos e acompanhamento contínuo.",
    ctaLabel: "Pedir análise de contrato",
    whatsappMessage:
      "Olá, Dra. Iandra. Vim pelo site e gostaria de solicitar informações sobre análise de contrato e consultoria jurídica.",
    iconKey: "book",
    highlighted: true,
  },
];

export const CONTACT_SUBJECT_OPTIONS: string[] = [
  "Direito de Família",
  "Direito Civil",
  "Direito do Consumidor",
  "Direito Previdenciário",
  "Direito Trabalhista",
  "Consultoria Jurídica e Contratos",
  "Outro assunto",
];

export interface FirstStepItem {
  step: string;
  title: string;
  description: string;
}

export const FIRST_ATTENDANCE_STEPS: FirstStepItem[] = [
  {
    step: "01",
    title: "Você entra em contato",
    description:
      "Envie uma mensagem pelo WhatsApp ou pelo formulário relatando brevemente a sua situação e o assunto principal.",
  },
  {
    step: "02",
    title: "Análise inicial do caso",
    description:
      "Agendamos uma conversa online ou presencial para compreender os fatos, ouvir suas dúvidas e verificar os documentos disponíveis.",
  },
  {
    step: "03",
    title: "Orientação sobre os próximos passos",
    description:
      "Você recebe uma explicação clara sobre os caminhos jurídicos cabíveis, as etapas envolvidas e as condições de acompanhamento.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "atendimento-online",
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online ocorre por videochamada agendada previamente, com envio digital de documentos e acompanhamento das informações do processo à distância. Ele segue os mesmos critérios de atenção, transparência e sigilo do atendimento presencial.",
  },
  {
    id: "documentos-necessarios",
    question: "Quais documentos devo separar para a primeira conversa?",
    answer:
      "Em geral, um documento de identificação e os registros relacionados à situação já ajudam na compreensão inicial — como contratos, comprovantes, notificações, carteira de trabalho, extratos ou decisões anteriores. Caso ainda não tenha tudo reunido, orientamos durante o atendimento o que será necessário.",
  },
  {
    id: "sigilo-profissional",
    question: "As informações compartilhadas no contato são sigilosas?",
    answer:
      "Sim. Todo relato, documento ou dado compartilhado está protegido pelo sigilo profissional previsto no Estatuto da Advocacia e no Código de Ética da OAB, além de ser utilizado exclusivamente para a finalidade de atendimento jurídico, conforme a LGPD.",
  },
  {
    id: "primeira-conversa",
    question: "Como funciona a primeira conversa e os honorários?",
    answer:
      "No primeiro contato, você apresenta um resumo da demanda para definirmos o melhor formato de atendimento. Na conversa inicial, analisamos a situação com calma e esclarecemos eventuais dúvidas sobre consulta, proposta de honorários e possibilidades de atuação, sempre em conformidade com a tabela da OAB.",
  },
  {
    id: "atuacao-outros-estados",
    question: "É possível receber atendimento estando fora da Paraíba?",
    answer:
      "Sim. Embora a sede fique em João Pessoa (PB), o processo judicial eletrônico e as reuniões por videochamada permitem atender clientes em todo o Brasil e brasileiros residentes no exterior.",
  },
];

export function buildLegalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneSchema,
    image: `${SITE_CONFIG.url}/foto-citacao.png`,
    logo: `${SITE_CONFIG.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: [SITE_CONFIG.instagramUrl],
    serviceType: PRACTICE_AREAS.map((area) => area.title),
  };
}
