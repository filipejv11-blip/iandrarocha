import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, Phone, Shield } from "lucide-react";
import { buildWhatsAppUrl, SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE_CONFIG.shortName}`,
  description:
    "Política de Privacidade e tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018) no site de Iandra Rocha Advocacia.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F1ED] text-[#1E1E1E]">
      <header className="bg-[#F3F1ED]/95 backdrop-blur-md border-b border-[#C7C6C7]/40 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
          >
            <Image
              src="/logo.png"
              alt="Logotipo Iandra Rocha Advocacia e Consultoria Jurídica"
              width={44}
              height={44}
              className="h-10 w-auto object-contain"
            />
            <span className="font-serif text-lg font-bold tracking-tight text-[#1E1E1E] whitespace-nowrap">
              Iandra Rocha
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6F1511] hover:text-[#5a110e] transition-colors rounded-lg px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-20 px-6">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_18px_50px_-24px_rgba(30,30,30,0.2)] border border-[#1E1E1E]/10 p-8 md:p-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6F1511] font-bold mb-4">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>LGPD — Lei nº 13.709/2018</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Política de Privacidade
          </h1>
          {/* TODO: Atualizar a data da última revisão após aprovação jurídica do texto */}
          <p className="text-sm text-[#4A4744] mb-10">
            Última atualização: TODO — inserir data da versão revisada.
          </p>

          <div className="space-y-8 text-[#32302D] text-[15px] sm:text-base leading-[1.75]">
            <section>
              <h2 className="font-serif text-2xl font-bold text-[#1E1E1E] mb-3">
                1. Finalidade do tratamento de dados
              </h2>
              <p>
                Este site tem caráter exclusivamente informativo e institucional,
                referente à atuação profissional da advogada{" "}
                <strong>{SITE_CONFIG.lawyerName}</strong> ({SITE_CONFIG.oab}).
                Os dados informados voluntariamente no formulário de contato
                (nome completo, assunto principal e breve relato) são utilizados{" "}
                <strong>unicamente para iniciar o atendimento solicitado</strong>{" "}
                por meio do WhatsApp profissional.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#1E1E1E] mb-3">
                2. Como os dados do formulário são processados
              </h2>
              <p>
                Ao clicar em <em>&ldquo;Enviar pelo WhatsApp&rdquo;</em>, as
                informações preenchidas compõem uma mensagem pré-preenchida no
                seu navegador e abrem diretamente o aplicativo ou versão web do
                WhatsApp. Este site não armazena os dados do formulário em banco
                de dados próprio nem os compartilha com terceiros para fins
                comerciais ou publicitários.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#1E1E1E] mb-3">
                3. Sigilo profissional e segurança
              </h2>
              <p>
                As informações enviadas nos canais oficiais de atendimento são
                tratadas com estrito sigilo profissional, nos termos do Estatuto
                da Advocacia (Lei nº 8.906/1994), do Código de Ética e Disciplina
                da OAB e da Lei Geral de Proteção de Dados Pessoais (Lei nº
                13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#1E1E1E] mb-3">
                4. Direitos do titular dos dados
              </h2>
              <p>
                Nos termos da LGPD, você pode solicitar a qualquer momento
                informações sobre o tratamento dos seus dados pessoais, bem como
                correção, atualização ou eliminação de registros mantidos em
                atendimento, ressalvadas as obrigações legais e regulatórias
                aplicáveis ao exercício da advocacia.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#1E1E1E] mb-3">
                5. Contato do controlador
              </h2>
              {/* TODO: Completar, se desejado, com endereço profissional completo ou inscrição societária */}
              <p className="mb-4">
                Para dúvidas sobre esta Política de Privacidade ou solicitações
                relacionadas à LGPD, entre em contato pelos canais abaixo:
              </p>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-4 h-4 text-[#6F1511] shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    WhatsApp:{" "}
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6F1511] underline underline-offset-4 hover:text-[#5a110e]"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram
                    className="w-4 h-4 text-[#6F1511] shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Instagram:{" "}
                    <a
                      href={SITE_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6F1511] underline underline-offset-4 hover:text-[#5a110e]"
                    >
                      {SITE_CONFIG.instagramHandle}
                    </a>
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <footer className="bg-[#1E1E1E] text-[#F3F1ED] py-8 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#F3F1ED]/80">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.shortName} (
            {SITE_CONFIG.oab}).
          </p>
          <Link
            href="/"
            className="text-[#F3F1ED] underline underline-offset-4 hover:text-[#E89B96] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3F1ED]"
          >
            Voltar à página inicial
          </Link>
        </div>
      </footer>
    </div>
  );
}
