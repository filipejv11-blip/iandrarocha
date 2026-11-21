"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Instagram,
  MapPin,
  Phone,
  Scale,
  Shield,
  User,
} from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FaqAccordion from "@/components/FaqAccordion";
import {
  buildContactFormMessage,
  buildWhatsAppUrl,
  CONTACT_SUBJECT_OPTIONS,
  FAQ_ITEMS,
  FIRST_ATTENDANCE_STEPS,
  PRACTICE_AREAS,
  SITE_CONFIG,
  WHATSAPP_FLOAT_MESSAGE,
  type PracticeArea,
} from "@/lib/site-config";

function AreaIcon({
  iconKey,
  highlighted,
}: {
  iconKey: PracticeArea["iconKey"];
  highlighted?: boolean;
}) {
  const className = highlighted
    ? "w-5 h-5 text-[#F5C2BE]"
    : "w-5 h-5 text-[#F5C2BE] group-hover:text-white transition-colors";

  switch (iconKey) {
    case "user":
      return <User className={className} aria-hidden="true" />;
    case "scale":
      return <Scale className={className} aria-hidden="true" />;
    case "shield":
      return <Shield className={className} aria-hidden="true" />;
    case "award":
      return <Award className={className} aria-hidden="true" />;
    case "briefcase":
      return <Briefcase className={className} aria-hidden="true" />;
    case "book":
      return <BookOpen className={className} aria-hidden="true" />;
  }
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<
    string | null
  >(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildContactFormMessage(formData);
    const whatsappUrl = buildWhatsAppUrl(text);
    setSubmittedWhatsappUrl(whatsappUrl);

    const anchor = document.createElement("a");
    anchor.href = whatsappUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };

  const preventiveContractWhatsappUrl = buildWhatsAppUrl(
    "Olá, Dra. Iandra. Vim pelo site e gostaria de enviar um contrato para análise jurídica.",
  );

  const onlineMeetingWhatsappUrl = buildWhatsAppUrl(
    "Olá, Dra. Iandra. Vim pelo site e gostaria de marcar um atendimento jurídico online.",
  );

  const contactWhatsappUrl = buildWhatsAppUrl(WHATSAPP_FLOAT_MESSAGE);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Link de acessibilidade para navegação por teclado */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#6F1511] focus:text-[#F3F1ED] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium focus:outline-2 focus:outline-offset-2 focus:outline-[#1E1E1E]"
      >
        Pular para o conteúdo principal
      </a>

      {/* ==========================================
          HEADER / CABEÇALHO (3 ZONAS EDITORIAIS)
          ========================================== */}
      <header className="fixed top-0 w-full bg-[#F3F1ED]/95 backdrop-blur-md z-50 border-b border-[#1E1E1E]/12">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-8">
          {/* Zona 1: Marca + Wordmark em linha única */}
          <a
            href="#"
            aria-label="Início — Iandra Rocha Advocacia e Consultoria Jurídica"
            className="flex items-center gap-2.5 md:gap-3 shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
          >
            <Image
              src="/logo.png"
              alt="Logotipo Iandra Rocha Advocacia e Consultoria Jurídica"
              width={48}
              height={48}
              priority
              sizes="48px"
              className="h-10 md:h-11 w-auto object-contain"
            />
            <span className="font-serif text-lg md:text-xl font-bold tracking-normal text-[#1E1E1E] whitespace-nowrap shrink-0">
              Iandra Rocha
            </span>
          </a>

          {/* Zona 2: Links de navegação em linha única com sublinhado discreto */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1E1E1E]/90"
          >
            {[
              { href: "#sobre", label: "Sobre" },
              { href: "#areas", label: "Áreas de Atuação" },
              { href: "#diferenciais", label: "Diferenciais" },
              { href: "#duvidas", label: "Dúvidas" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#6F1511] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#6F1511] after:transition-all after:duration-200 hover:after:w-full rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F1511]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação principal (sem ícone de chat redundante com o WhatsApp flutuante) */}
          <div className="flex items-center shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-[#6F1511] text-[#F3F1ED] px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#5a110e] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
            >
              Fale comigo
            </a>
          </div>
        </div>

        {/* Navegação mobile compacta */}
        <div className="md:hidden border-t border-[#1E1E1E]/10">
          <nav
            aria-label="Navegação mobile"
            className="flex items-center justify-between px-5 py-2 text-[13px] font-medium text-[#1E1E1E]/90 whitespace-nowrap"
          >
            <a
              href="#sobre"
              className="hover:text-[#6F1511] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
            >
              Sobre
            </a>
            <a
              href="#areas"
              className="hover:text-[#6F1511] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
            >
              Áreas
            </a>
            <a
              href="#diferenciais"
              className="hover:text-[#6F1511] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
            >
              Diferenciais
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#6F1511] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
            >
              Dúvidas
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo-principal" className="flex-1 flex flex-col">
        {/* ==========================================
            HERO SECTION / SEÇÃO PRINCIPAL
            ========================================== */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-24 px-6 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -mr-[18%] -mt-[12%] w-[60%] h-[65%] rounded-full bg-[#6F1511]/[0.04] blur-3xl -z-10"
          />

          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 max-w-2xl"
            >
              {/* Metadados institucionais limpos (sem pílulas ou separadores órfãos no mobile) */}
              <p className="text-[13px] sm:text-sm font-semibold text-[#6F1511] tracking-[0.02em] mb-5 leading-relaxed">
                <span>{SITE_CONFIG.oab}</span>
                <span aria-hidden="true" className="mx-2 text-[#1E1E1E]/40">
                  ·
                </span>
                <span>{SITE_CONFIG.locationDisplay}</span>
                <span
                  aria-hidden="true"
                  className="hidden sm:inline mx-2 text-[#1E1E1E]/40"
                >
                  ·
                </span>
                <span className="block sm:inline mt-0.5 sm:mt-0 text-[#3A3835] sm:text-[#6F1511] font-medium sm:font-semibold">
                  Atendimento Nacional
                </span>
              </p>

              <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#1E1E1E] leading-[1.09] mb-6 tracking-[-0.015em] text-balance">
                Advocacia{" "}
                <span className="text-[#6F1511] italic font-normal">ética</span>{" "}
                e{" "}
                <span className="text-[#6F1511] italic font-normal">
                  contemporânea
                </span>
                .
              </h1>

              <p className="text-[17px] sm:text-lg md:text-[1.3rem] text-[#2F2D2A] mb-8 leading-[1.65] max-w-[36rem]">
                Atuação técnica e sensibilidade humana, traduzindo uma advocacia
                comprometida com pessoas e suas histórias.
              </p>

              {/* CTA principal único na primeira dobra */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 bg-[#6F1511] text-[#F3F1ED] px-7 py-3.5 rounded-xl text-base font-medium whitespace-nowrap hover:bg-[#5a110e] transition-all duration-200 hover:gap-3.5 shadow-[0_12px_28px_-10px_rgba(111,21,17,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
                >
                  Conversar sobre meu caso
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="#areas"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-[15px] font-medium text-[#1E1E1E] hover:text-[#6F1511] underline decoration-[#1E1E1E]/25 hover:decoration-[#6F1511] underline-offset-4 transition-colors py-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F1511] rounded"
                >
                  Ver áreas de atuação
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              {/* Faixa editorial discreta de credenciais com marcadores alinhados à esquerda */}
              <ul className="pt-6 border-t border-[#1E1E1E]/15 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[14px] sm:text-[15px] text-[#262523]">
                {[
                  "Sigilo profissional",
                  "Advocacia e Consultoria Jurídica",
                  "Online & Presencial",
                ].map((credential) => (
                  <li
                    key={credential}
                    className="inline-flex items-center gap-2.5 font-medium"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#6F1511] shrink-0"
                    />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Retrato da Hero em proporção natural 4:5 (sem selo cobrindo a imagem) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 relative w-full max-w-[440px] mx-auto"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#1E1E1E]/10 bg-[#E8E4DD] shadow-[0_24px_60px_-28px_rgba(30,30,30,0.32)]">
                <Image
                  src="/foto-citacao.png"
                  alt="Retrato da advogada Iandra Diniz Rocha, OAB/PB 34.774"
                  fill
                  priority
                  sizes="(max-width: 768px) calc(100vw - 48px), 440px"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            QUOTE SECTION / FAIXA DE PROPÓSITO
            ========================================== */}
        <section
          aria-label="Propósito profissional"
          className="py-14 md:py-20 bg-[#6F1511] text-[#F3F1ED] px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                aria-hidden="true"
                className="w-12 h-px bg-[#F3F1ED]/40 mx-auto mb-6"
              />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.35rem] font-normal leading-[1.32] mb-7 text-[#FAF8F5] max-w-3xl mx-auto text-balance">
                &ldquo;Conduzindo{" "}
                <span className="italic font-normal border-b border-[#FAF8F5]/45 pb-0.5">
                  questões complexas
                </span>{" "}
                com orientação jurídica pautada pela{" "}
                <span className="font-semibold">ética</span> e{" "}
                <span className="font-semibold">clareza</span>.&rdquo;
              </h2>
              <div className="flex justify-center opacity-85">
                <Image
                  src="/logo.png"
                  alt="Marca institucional Iandra Rocha Advocacia"
                  width={64}
                  height={64}
                  sizes="64px"
                  className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            ABOUT SECTION / SEÇÃO SOBRE A ADVOGADA
            ========================================== */}
        <section
          id="sobre"
          className="py-16 md:py-24 px-6 bg-white scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Lado da Imagem com legenda editorial integrada (sem sobreposição externa) */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 order-2 md:order-1"
            >
              <div className="relative aspect-[3/4] max-h-[600px] w-full rounded-2xl overflow-hidden border border-[#1E1E1E]/10 bg-[#E8E4DD] shadow-[0_24px_60px_-28px_rgba(30,30,30,0.28)]">
                <Image
                  src="/foto-sobre.jpeg"
                  alt="Advogada Iandra Diniz Rocha, inscrita na OAB/PB 34.774"
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 520px"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/92 via-[#141312]/38 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                  <p className="text-xs sm:text-[13px] font-semibold tracking-[0.12em] uppercase text-[#F7CAC6] mb-1">
                    {SITE_CONFIG.oab}
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                    Bacharela em Direito pela UFPB
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Lado do Texto */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 order-1 md:order-2"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F1511] font-semibold mb-3 flex items-center gap-3">
                <span
                  className="w-7 h-px bg-[#6F1511]"
                  aria-hidden="true"
                />
                Sobre mim
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-[1.12] mb-5 text-balance">
                {SITE_CONFIG.lawyerName}
              </h2>

              <p className="text-[#32302D] text-[16px] sm:text-lg leading-[1.72] mb-8 max-w-[60ch]">
                Atuo com dedicação, ética e responsabilidade na defesa dos
                direitos dos meus clientes, prezando sempre por um atendimento
                próximo, claro e transparente.
              </p>

              <div className="divide-y divide-[#1E1E1E]/12 border-y border-[#1E1E1E]/12 mb-9">
                <div className="py-5 flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#6F1511]/8 flex items-center justify-center shrink-0">
                    <User
                      className="w-5 h-5 text-[#6F1511]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E1E1E] mb-1">
                      Atendimento Humanizado
                    </h3>
                    <p className="text-[#3A3835] text-[15px] leading-[1.65]">
                      Compreensão atenta de cada caso, oferecendo orientação
                      jurídica clara e acolhedora.
                    </p>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#6F1511]/8 flex items-center justify-center shrink-0">
                    <Shield
                      className="w-5 h-5 text-[#6F1511]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E1E1E] mb-1">
                      Experiência Prática
                    </h3>
                    <p className="text-[#3A3835] text-[15px] leading-[1.65]">
                      Vivência sólida em escritórios, cartórios e condução de
                      demandas jurídicas judiciais e extrajudiciais.
                    </p>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#6F1511]/8 flex items-center justify-center shrink-0">
                    <MapPin
                      className="w-5 h-5 text-[#6F1511]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E1E1E] mb-1">
                      Presencial e Online
                    </h3>
                    <p className="text-[#3A3835] text-[15px] leading-[1.65]">
                      Sede em João Pessoa (PB), com estrutura para atendimento
                      remoto em todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#primeiro-atendimento"
                className="inline-flex items-center gap-2.5 bg-[#1E1E1E] text-[#F3F1ED] px-7 py-3.5 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-[#32302E] transition-all duration-200 hover:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
              >
                Conhecer o atendimento
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            ÁREAS DE ATUAÇÃO / 6 CARDS COESOS (01–06)
            ========================================== */}
        <section
          id="areas"
          className="py-16 md:py-24 px-6 bg-[#1E1E1E] text-[#F3F1ED] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <p className="text-xs uppercase tracking-[0.18em] text-[#F5C2BE] font-semibold mb-3">
                Áreas de Atuação
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#FAF8F5] leading-[1.12] text-balance">
                Frentes de atuação{" "}
                <span className="text-[#F5C2BE] italic font-normal">
                  jurídica
                </span>
              </h2>
              <p className="text-[15px] sm:text-base text-[#E6E2DC] leading-[1.68] max-w-[54ch] mx-auto">
                Clique na área correspondente à sua dúvida para iniciar uma
                conversa orientada pelo WhatsApp.
              </p>
            </div>

            {/* Grid simétrico 3x2 em desktop, 2x3 em tablet, 1x6 em mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {PRACTICE_AREAS.map((area, index) => {
                const areaWhatsappUrl = buildWhatsAppUrl(area.whatsappMessage);

                return (
                  <motion.article
                    key={area.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={
                      area.highlighted
                        ? "bg-[#2C1817] p-7 md:p-8 rounded-2xl group relative overflow-hidden border border-[#A8423B]/65 hover:border-[#F5C2BE]/75 transition-all duration-300 flex flex-col justify-between"
                        : "bg-[#252423] p-7 md:p-8 rounded-2xl group relative overflow-hidden border border-white/12 hover:border-[#F5C2BE]/55 transition-all duration-300 flex flex-col justify-between"
                    }
                  >
                    {/* Filete superior discreto no hover */}
                    <div
                      aria-hidden="true"
                      className={
                        area.highlighted
                          ? "absolute inset-x-0 top-0 h-[2px] bg-[#C45952]"
                          : "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6F1511] via-[#D47A74] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      }
                    />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <span className="font-serif text-2xl font-semibold text-[#F5C2BE] tabular-nums">
                            {area.number}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#6F1511] transition-colors duration-200">
                            <AreaIcon
                              iconKey={area.iconKey}
                              highlighted={area.highlighted}
                            />
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[#FAF8F5] group-hover:text-white transition-colors leading-snug">
                          {area.title}
                        </h3>
                        <p className="text-[15px] text-[#E6E2DC] leading-[1.68] mb-6">
                          {area.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/14">
                        <a
                          href={areaWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F5C2BE] hover:text-white transition-all duration-200 group-hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5C2BE] rounded"
                        >
                          <span>{area.ctaLabel}</span>
                          <ArrowRight
                            className="w-4 h-4 shrink-0"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================
            CONSULTORIA PREVENTIVA / CONTRATOS
            ========================================== */}
        <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F1511] font-semibold mb-3 flex items-center gap-3">
                <span
                  className="w-7 h-px bg-[#6F1511]"
                  aria-hidden="true"
                />
                Consultoria Preventiva
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#1E1E1E] mb-6 leading-[1.15] text-balance">
                Orientação jurídica{" "}
                <span className="text-[#6F1511] italic font-normal">
                  antes e depois
                </span>{" "}
                de assinar um contrato
              </h2>

              <p className="text-[#32302D] text-[16px] sm:text-[17px] leading-[1.72] mb-8 max-w-[56ch]">
                A leitura técnica e preventiva auxilia a compreender riscos,
                obrigações, multas e cláusulas contratuais antes de assumir
                compromissos ou ao revisar instrumentos já firmados.
              </p>

              <ul className="space-y-3.5 mb-9">
                {[
                  "Análise e revisão de contratos",
                  "Elaboração de documentos com clareza jurídica",
                  "Identificação de cláusulas abusivas ou desproporcionais",
                  "Orientação preventiva para redução de riscos",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#262523] text-[15px] sm:text-base leading-snug"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#6F1511] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={preventiveContractWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#6F1511] text-[#F3F1ED] px-7 py-3.5 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-[#5a110e] transition-all duration-200 hover:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
              >
                Enviar contrato para análise
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1E1E1E]/10 bg-[#E8E4DD] shadow-[0_24px_60px_-28px_rgba(30,30,30,0.26)]">
                <Image
                  src="/foto-contratos.webp"
                  alt="Material informativo sobre consultoria jurídica preventiva e análise de contratos"
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 600px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            DIFERENCIAIS / GEOMETRIA UNIFICADA
            ========================================== */}
        <section
          id="diferenciais"
          className="py-16 md:py-24 px-6 bg-[#F3F1ED] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-14">
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F1511] font-semibold mb-3 flex items-center gap-3">
                <span
                  className="w-7 h-px bg-[#6F1511]"
                  aria-hidden="true"
                />
                Pilares da Atuação
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] text-balance">
                Meus{" "}
                <span className="text-[#6F1511] italic font-normal">
                  diferenciais
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Scale className="w-5 h-5" aria-hidden="true" />,
                  title: "Ética Profissional",
                  desc: "Atuação pautada em valores sólidos, transparência e observância rigorosa ao Código de Ética da OAB em cada etapa.",
                },
                {
                  icon: <User className="w-5 h-5" aria-hidden="true" />,
                  title: "Escuta Ativa e Acolhimento",
                  desc: "Atenção individualizada a cada demanda, reconhecendo que por trás de cada processo há uma pessoa e sua história.",
                },
                {
                  icon: <Shield className="w-5 h-5" aria-hidden="true" />,
                  title: "Clareza e Transparência",
                  desc: "Comunicação direta e objetiva, mantendo você informado sobre o andamento de cada fase sem juridiquês desnecessário.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5" aria-hidden="true" />,
                  title: "Condução Criteriosa",
                  desc: "Análise individual de cada situação para definir os caminhos jurídicos adequados, com responsabilidade técnica.",
                },
              ].map((dif, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="p-7 rounded-2xl border border-[#1E1E1E]/10 hover:border-[#6F1511]/45 transition-all duration-200 hover:-translate-y-0.5 bg-white shadow-[0_10px_30px_-22px_rgba(30,30,30,0.22)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#6F1511]/8 text-[#6F1511] flex items-center justify-center mb-6">
                    {dif.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E1E1E] leading-snug mb-3">
                    {dif.title}
                  </h3>
                  <p className="text-[#3A3835] leading-[1.68] text-[15px]">
                    {dif.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            ATENDIMENTO DIGITAL
            ========================================== */}
        <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 order-2 md:order-1 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1E1E1E]/10 bg-[#E8E4DD] shadow-[0_24px_60px_-28px_rgba(30,30,30,0.26)]">
                <Image
                  src="/foto-digital.webp"
                  alt="Notebook exibindo o site da advogada Iandra Rocha para atendimento jurídico online"
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 600px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 order-1 md:order-2"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F1511] font-semibold mb-3 flex items-center gap-3">
                <span
                  className="w-7 h-px bg-[#6F1511]"
                  aria-hidden="true"
                />
                Atendimento Digital
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1E1E1E] mb-6 leading-[1.12] text-balance">
                Advocacia{" "}
                <span className="text-[#6F1511] italic font-normal">
                  sem fronteiras
                </span>
                .
              </h2>

              <p className="text-[#32302D] text-[16px] sm:text-[17px] leading-[1.72] mb-5 max-w-[56ch]">
                A distância não é mais um obstáculo para ter acesso a um
                atendimento jurídico qualificado. Ofereço atendimento online
                para clientes em{" "}
                <strong className="font-semibold text-[#1E1E1E]">
                  todo o Brasil e brasileiros no exterior
                </strong>
                .
              </p>

              <p className="text-[#32302D] text-[16px] sm:text-[17px] leading-[1.72] mb-9 max-w-[56ch]">
                A mesma proximidade, sigilo e dedicação do atendimento
                presencial, com a conveniência que a sua rotina exige. Reuniões
                por videochamada, análise documental digital e acompanhamento
                processual online.
              </p>

              <a
                href={onlineMeetingWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#1E1E1E] text-[#F3F1ED] px-7 py-3.5 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-[#32302E] transition-all duration-200 hover:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
              >
                Marcar atendimento online
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            COMO FUNCIONA O PRIMEIRO ATENDIMENTO (3 PASSOS)
            ========================================== */}
        <section
          id="primeiro-atendimento"
          className="py-16 md:py-24 px-6 bg-[#F3F1ED] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 md:mb-14">
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F1511] font-semibold mb-3 flex items-center gap-3">
                <span
                  className="w-7 h-px bg-[#6F1511]"
                  aria-hidden="true"
                />
                Primeiro Atendimento
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 text-balance">
                Como funciona o{" "}
                <span className="text-[#6F1511] italic font-normal">
                  primeiro atendimento
                </span>
              </h2>
              <p className="text-[#3A3835] text-base md:text-lg leading-[1.7] max-w-[54ch]">
                Um fluxo simples e transparente para que você entenda cada etapa
                antes de tomar qualquer decisão.
              </p>
            </div>

            <div className="relative">
              {/* Linha conectora discreta em desktop */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-11 left-[16%] right-[16%] h-px bg-[#1E1E1E]/12"
              />
              <ol className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                {FIRST_ATTENDANCE_STEPS.map((item, index) => (
                  <motion.li
                    key={item.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="bg-white rounded-2xl p-8 border border-[#1E1E1E]/10 shadow-[0_10px_30px_-22px_rgba(30,30,30,0.2)] flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#6F1511]/8 font-serif text-lg font-bold text-[#6F1511] tabular-nums mb-6">
                        {item.step}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#1E1E1E] leading-snug mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-[#3A3835] leading-[1.68]">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ==========================================
            FAQ / PERGUNTAS FREQUENTES (ACCORDION ACESSÍVEL)
            ========================================== */}
        <section
          id="duvidas"
          className="py-16 md:py-24 px-6 bg-white scroll-mt-24"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-[#6F1511] font-semibold mb-3 flex items-center gap-3">
                <span
                  className="w-7 h-px bg-[#6F1511]"
                  aria-hidden="true"
                />
                Dúvidas Frequentes
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] text-balance">
                Perguntas{" "}
                <span className="text-[#6F1511] italic font-normal">
                  frequentes
                </span>
              </h2>
            </div>

            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ==========================================
            CONTATO / CONTACT FORM
            ========================================== */}
        <section
          id="contato"
          className="py-16 md:py-24 px-6 bg-[#F3F1ED] scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#1E1E1E]/10 shadow-[0_24px_60px_-28px_rgba(30,30,30,0.22)] overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-[#1E1E1E] text-[#F3F1ED] p-8 md:p-11 flex flex-col justify-between relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-56 h-56 bg-[#6F1511] rounded-full blur-3xl opacity-20 -mr-20 -mt-20"
              />

              <div className="relative z-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-[#FAF8F5]">
                  Vamos conversar?
                </h2>
                <p className="text-[#E6E2DC] mb-10 leading-[1.68] text-[15px] md:text-base">
                  Preencha o formulário para agilizar o atendimento. As
                  informações serão enviadas diretamente para o meu WhatsApp
                  profissional.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F3F1ED]/12 flex items-center justify-center shrink-0">
                      <Phone
                        className="w-4 h-4 text-[#F5C2BE]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#D8D4CE] uppercase tracking-wider mb-0.5">
                        WhatsApp
                      </p>
                      <a
                        href={contactWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-[#FAF8F5] hover:text-[#F5C2BE] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3F1ED] rounded"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F3F1ED]/12 flex items-center justify-center shrink-0">
                      <Instagram
                        className="w-4 h-4 text-[#F5C2BE]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#D8D4CE] uppercase tracking-wider mb-0.5">
                        Instagram
                      </p>
                      <a
                        href={SITE_CONFIG.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-[#FAF8F5] hover:text-[#F5C2BE] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3F1ED] rounded"
                      >
                        {SITE_CONFIG.instagramHandle}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F3F1ED]/12 flex items-center justify-center shrink-0">
                      <MapPin
                        className="w-4 h-4 text-[#F5C2BE]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#D8D4CE] uppercase tracking-wider mb-0.5">
                        Localização
                      </p>
                      <p className="text-[15px] font-medium text-[#FAF8F5]">
                        {SITE_CONFIG.locationDisplay}
                      </p>
                      <p className="text-sm text-[#D8D4CE] mt-0.5">
                        Atendimento remoto para todo o Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Logotipo Iandra Rocha Advocacia no painel de contato"
                  width={72}
                  height={72}
                  sizes="72px"
                  className="h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-75"
                />
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-11">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1E1E1E] mb-2"
                  >
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#1E1E1E]/25 bg-[#F3F1ED]/45 text-base text-[#1E1E1E] placeholder:text-[#5C5955] focus:bg-white focus:ring-2 focus:ring-[#6F1511] focus:border-transparent transition-all outline-none"
                    placeholder="Ex: Maria Silva"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#1E1E1E] mb-2"
                  >
                    Assunto Principal
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#1E1E1E]/25 bg-[#F3F1ED]/45 text-base text-[#1E1E1E] focus:bg-white focus:ring-2 focus:ring-[#6F1511] focus:border-transparent transition-all outline-none"
                  >
                    <option value="" disabled>
                      Selecione a área de interesse
                    </option>
                    {CONTACT_SUBJECT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1E1E1E] mb-2"
                  >
                    Breve relato do seu caso
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#1E1E1E]/25 bg-[#F3F1ED]/45 text-base text-[#1E1E1E] placeholder:text-[#5C5955] focus:bg-white focus:ring-2 focus:ring-[#6F1511] focus:border-transparent transition-all outline-none resize-none leading-relaxed"
                    placeholder="Descreva brevemente como posso ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6F1511] text-[#F3F1ED] py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#5a110e] transition-colors duration-200 flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511] cursor-pointer"
                >
                  Enviar pelo WhatsApp
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <p className="text-[13px] text-center text-[#4A4744] leading-relaxed">
                  Ao clicar, você será redirecionado para o WhatsApp com as
                  informações preenchidas.
                </p>
                {submittedWhatsappUrl && (
                  <p
                    role="status"
                    className="text-sm text-center text-[#1E1E1E] bg-[#F3F1ED] rounded-xl px-4 py-3"
                  >
                    Mensagem preparada. Caso o WhatsApp não tenha aberto
                    automaticamente,{" "}
                    <a
                      href={submittedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6F1511] font-semibold underline underline-offset-2"
                    >
                      clique aqui para continuar
                    </a>
                    .
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================
          FOOTER / RODAPÉ
          ========================================== */}
      <footer className="bg-[#1E1E1E] text-[#FAF8F5] pt-10 pb-24 md:py-12 md:pb-20 px-6 border-t border-white/12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logotipo Iandra Rocha Advocacia e Consultoria Jurídica no rodapé"
                width={64}
                height={64}
                sizes="64px"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <span className="font-serif text-lg font-semibold text-[#FAF8F5]">
                Iandra Rocha
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#E6E2DC]">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F5C2BE]" aria-hidden="true" />
                {SITE_CONFIG.phoneDisplay}
              </span>
              <span className="flex items-center gap-2">
                <Instagram
                  className="w-4 h-4 text-[#F5C2BE]"
                  aria-hidden="true"
                />
                {SITE_CONFIG.instagramHandle}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F5C2BE]" aria-hidden="true" />
                {SITE_CONFIG.locationDisplay}
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#D8D4CE]">
            <p>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.shortName} (
              {SITE_CONFIG.oab}). Todos os direitos reservados.
            </p>
            <Link
              href="/privacidade"
              className="text-[#FAF8F5] hover:text-[#F5C2BE] underline underline-offset-4 transition-colors rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3F1ED]"
            >
              Política de Privacidade (LGPD)
            </Link>
          </div>
        </div>
      </footer>

      {/* Botão flutuante fixo de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
