"use client"; // Indica que este componente deve ser renderizado no lado do cliente (navegador), permitindo o uso de hooks como useState e useEffect.

import { useState, useEffect } from "react";
import Image from "next/image"; // Componente otimizado de imagem do Next.js
import { motion } from "motion/react"; // Biblioteca Framer Motion para animações fluidas
// Importação de ícones da biblioteca Lucide React
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Star,
  User,
} from "lucide-react";

export default function Home() {
  // Estado para armazenar os dados do formulário de contato
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  
  // Estado para controlar a exibição do menu de navegação mobile ao rolar a página
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Hook useEffect para monitorar o scroll da janela
  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll for maior que 300px, mostra o menu mobile
      setShowMobileNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    // Limpa o event listener quando o componente for desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para atualizar o estado do formulário conforme o usuário digita
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função executada ao enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Formata a mensagem para ser enviada via WhatsApp
    const phoneNumber = "5583987633502"; // Número de telefone (83) 98763-3502
    const text = `Olá, Dra. Iandra. Meu nome é *${formData.name}*.\n\n*Assunto:* ${formData.subject}\n\n*Mensagem:* ${formData.message}`;
    
    // Codifica o texto para o formato de URL (substituindo espaços por %20, etc)
    const encodedText = encodeURIComponent(text);

    // Cria o link do WhatsApp e abre em uma nova aba
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* ==========================================
          HEADER / CABEÇALHO
          ========================================== */}
      <header className="fixed top-0 w-full bg-[#F3F1ED]/95 backdrop-blur-md z-50 border-b border-[#C7C6C7]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Iandra Rocha Advocacia & Consultoria Jurídica"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1E1E1E]/80">
            <a href="#sobre" className="hover:text-[#6F1511] transition-colors">Sobre</a>
            <a href="#areas" className="hover:text-[#6F1511] transition-colors">Áreas de Atuação</a>
            <a href="#diferenciais" className="hover:text-[#6F1511] transition-colors">Diferenciais</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5583987633502"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#6F1511] text-[#F3F1ED]"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="#contato"
              className="hidden md:flex items-center gap-2 bg-[#6F1511] text-[#F3F1ED] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#5a110e] transition-colors"
            >
              Fale comigo
            </a>
          </div>
        </div>

        {/* Mobile Horizontal Navigation */}
        <div className="md:hidden border-t border-[#C7C6C7]/20">
          <nav className="flex items-center justify-between px-5 py-2.5 text-[10px] font-bold text-[#1E1E1E]/70 uppercase tracking-wider whitespace-nowrap">
            <a href="#sobre" className="hover:text-[#6F1511] transition-colors">Sobre</a>
            <a href="#areas" className="hover:text-[#6F1511] transition-colors">Áreas</a>
            <a href="#diferenciais" className="hover:text-[#6F1511] transition-colors">Diferenciais</a>
            <a href="#contato" className="hover:text-[#6F1511] transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* ==========================================
          HERO SECTION / SEÇÃO PRINCIPAL
          A primeira dobra do site, projetada para causar impacto imediato.
          ========================================== */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        {/* Elemento de fundo sutil para dar profundidade */}
        <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[70%] h-[70%] rounded-full bg-[#6F1511]/5 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Textos da Hero (Animados com Framer Motion) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Estado inicial (invisível e levemente para baixo)
            animate={{ opacity: 1, y: 0 }}  // Estado final (visível e na posição original)
            transition={{ duration: 0.8 }}  // Duração da animação
            className="max-w-xl"
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-[#1E1E1E] leading-[1.05] mb-6 tracking-tight">
              Advocacia <br className="hidden md:block" />
              <span className="text-[#6F1511] italic font-light relative">
                ética
                {/* Sublinhado decorativo */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#6F1511]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </span>{" "}
              e <br className="hidden md:block" />
              <span className="text-[#6F1511] italic font-light">
                contemporânea
              </span>.
            </h1>
            <p className="text-lg md:text-xl text-[#1E1E1E]/80 mb-8 leading-relaxed">
              Excelência técnica e sensibilidade humana, traduzindo uma
              advocacia comprometida com pessoas e suas histórias.
            </p>

            {/* Trust Indicators / Indicadores de Confiança Rápidos */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3 text-[#1E1E1E]/90">
                <Shield className="w-5 h-5 text-[#6F1511]" />
                <span className="font-medium text-sm md:text-base">Segurança Jurídica e Sigilo Absoluto</span>
              </div>
              <div className="flex items-center gap-3 text-[#1E1E1E]/90">
                <Star className="w-5 h-5 text-[#6F1511]" />
                <span className="font-medium text-sm md:text-base">Especialista em Soluções Estratégicas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[#6F1511] text-[#F3F1ED] px-8 py-4 rounded-full text-base font-medium hover:bg-[#5a110e] transition-all hover:gap-4 shadow-lg shadow-[#6F1511]/20"
              >
                Agende sua consulta comigo <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-[#6F1511] font-medium bg-[#6F1511]/5 px-4 py-3 rounded-full text-sm w-full sm:w-auto justify-center">
                <MapPin className="w-4 h-4" />
                <span>Atendimento Nacional</span>
              </div>
            </div>
          </motion.div>

          {/* Imagem da Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay de 0.2s para aparecer depois do texto
            className="relative w-full aspect-square max-w-[500px] mx-auto"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-10">
              {/* 
                INSTRUÇÃO PARA IMAGEM PRINCIPAL (HERO):
                1. Coloque sua foto na pasta "public" com o nome "foto-citacao.jpg" (ou .png, mas lembre de mudar a extensão aqui).
                2. O 'object-cover' garante que a imagem preencha o espaço sem distorcer.
              */}
              <Image
                src="/foto-citacao.png"
                alt="Iandra Rocha"
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badge / Selo Flutuante para chamar atenção rápida */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-[#6F1511]/10 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-[#6F1511]" />
                </div>
                {/* Ponto verde pulsante indicando "Online/Ativo" */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Consultoria</p>
                <p className="text-sm md:text-base font-bold text-[#1E1E1E]">Online & Presencial</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          QUOTE SECTION / SEÇÃO DE CITAÇÃO
          Uma faixa de respiro com uma frase de impacto para conectar emocionalmente.
          ========================================== */}
      <section className="py-16 md:py-24 bg-[#6F1511] text-[#F3F1ED] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Scale className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8 opacity-50" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
              &quot;Transformando{" "}
              <span className="italic font-medium border-b border-[#F3F1ED]/30 pb-1">
                desafios complexos
              </span>{" "}
              em soluções jurídicas com{" "}
              <span className="font-bold">segurança</span> e{" "}
              <span className="font-bold">excelência</span>.&quot;
            </h2>
            <div className="flex justify-center mt-8 opacity-60">
              <img
                src="/logo.png"
                alt="Iandra Rocha"
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          ABOUT SECTION / SEÇÃO SOBRE A ADVOGADA
          Apresenta o perfil profissional, foto e credenciais.
          ========================================== */}
      <section id="sobre" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Lado da Imagem (Esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Animação vindo da esquerda
            whileInView={{ opacity: 1, x: 0 }} // Dispara quando o elemento entra na tela
            viewport={{ once: true }} // Anima apenas uma vez
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
            <div className="relative h-[500px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-[#E5E5E5]">
              {/* 
                INSTRUÇÃO PARA IMAGEM DA SEÇÃO SOBRE:
                1. Coloque a foto que você enviou na pasta "public" com o nome "foto-sobre.jpg" (ou .png).
                2. O 'object-cover' e 'object-top' garantem que a imagem foque no seu rosto e não corte a parte de cima.
              */}
              <Image
                src="/foto-sobre.jpeg"
                alt="Iandra Diniz Rocha"
                fill
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#6F1511] p-2 rounded-full">
                    <Award className="w-5 h-5 text-[#F3F1ED]" />
                  </div>
                  <span className="font-medium tracking-wider uppercase text-sm">OAB/PB 34.774</span>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#F3F1ED] p-6 rounded-2xl shadow-xl border border-[#C7C6C7]/30 max-w-[240px] hidden sm:block">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-[#6F1511] shrink-0" />
                <div>
                  <p className="text-[#1E1E1E] font-bold text-sm mb-1">Formação de Excelência</p>
                  <p className="text-[#1E1E1E]/70 text-xs">Bacharela em Direito pela UFPB</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lado do Texto (Direita) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Animação vindo da direita
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-sm uppercase tracking-widest text-[#6F1511] font-bold mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#6F1511]" />
              Sobre Mim
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              Iandra Diniz Rocha
            </h2>
            
            <p className="text-[#1E1E1E]/80 text-lg leading-relaxed mb-8">
              Atuo com dedicação, ética e responsabilidade na defesa dos direitos dos meus clientes, prezando sempre por um atendimento humanizado e transparente.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-[#6F1511]/10 p-2 rounded-full shrink-0">
                  <User className="w-5 h-5 text-[#6F1511]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E] mb-1">Atendimento Humanizado</h4>
                  <p className="text-[#1E1E1E]/70 text-sm leading-relaxed">
                    Compreensão profunda de cada caso, oferecendo orientação jurídica clara e acolhedora.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-[#6F1511]/10 p-2 rounded-full shrink-0">
                  <Shield className="w-5 h-5 text-[#6F1511]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E] mb-1">Experiência Prática</h4>
                  <p className="text-[#1E1E1E]/70 text-sm leading-relaxed">
                    Vivência sólida em escritórios, cartórios e gestão de demandas jurídicas complexas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-[#6F1511]/10 p-2 rounded-full shrink-0">
                  <MapPin className="w-5 h-5 text-[#6F1511]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E] mb-1">Atendimento Nacional</h4>
                  <p className="text-[#1E1E1E]/70 text-sm leading-relaxed">
                    Sede em João Pessoa (PB) com estrutura completa para atendimento remoto em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#1E1E1E] text-[#F3F1ED] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2a2a2a] transition-all hover:gap-4"
            >
              Falar com Iandra <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          ÁREAS DE ATUAÇÃO / SPECIALTIES
          Grid com os serviços oferecidos.
          ========================================== */}
      <section id="areas" className="py-16 md:py-24 px-6 bg-[#1E1E1E] text-[#F3F1ED]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-sm uppercase tracking-widest text-[#6F1511] font-bold mb-4">
              Áreas de Atuação
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Especialidades <span className="text-[#6F1511] italic font-light">jurídicas</span>
            </h2>
          </div>

          {/* Bento Grid Layout - Inovação Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Card 1 - Destaque Maior (Direito de Família) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 md:p-10 rounded-3xl group relative overflow-hidden border border-white/5 hover:border-[#6F1511]/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6F1511] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 -mr-20 -mt-20" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-5xl font-serif text-[#6F1511]/30 font-bold group-hover:text-[#6F1511]/50 transition-colors">01</span>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#6F1511] transition-colors duration-500">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-[#6F1511] transition-colors">
                    Direito de Família
                  </h4>
                  <p className="text-[#F3F1ED]/70 leading-relaxed max-w-lg">
                    Divórcio, guarda, pensão alimentícia, inventário e partilha de bens. Suporte jurídico com empatia, discrição e firmeza nos momentos mais delicados da vida.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Direito Civil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-3xl group relative overflow-hidden border border-white/5 hover:border-[#6F1511]/50 transition-all duration-500"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-serif text-[#6F1511]/30 font-bold">02</span>
                  <Scale className="w-6 h-6 text-white/40 group-hover:text-[#6F1511] transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-3 group-hover:text-[#6F1511] transition-colors">
                    Direito Civil
                  </h4>
                  <p className="text-sm text-[#F3F1ED]/70 leading-relaxed">
                    Contratos, responsabilidade civil, cobranças e indenizações. Proteção dos seus direitos com estratégia.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Direito do Consumidor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-3xl group relative overflow-hidden border border-white/5 hover:border-[#6F1511]/50 transition-all duration-500"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-serif text-[#6F1511]/30 font-bold">03</span>
                  <Shield className="w-6 h-6 text-white/40 group-hover:text-[#6F1511] transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-3 group-hover:text-[#6F1511] transition-colors">
                    Direito do Consumidor
                  </h4>
                  <p className="text-sm text-[#F3F1ED]/70 leading-relaxed">
                    Defesa em relações de consumo, negativação indevida e danos morais contra empresas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Direito Previdenciário */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-3xl group relative overflow-hidden border border-white/5 hover:border-[#6F1511]/50 transition-all duration-500"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-serif text-[#6F1511]/30 font-bold">04</span>
                  <Award className="w-6 h-6 text-white/40 group-hover:text-[#6F1511] transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-3 group-hover:text-[#6F1511] transition-colors">
                    Direito Previdenciário
                  </h4>
                  <p className="text-sm text-[#F3F1ED]/70 leading-relaxed">
                    Aposentadorias, benefícios por incapacidade e revisões do INSS. Conquiste o que é seu por direito.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Consultoria Jurídica (Destaque Secundário) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#6F1511] p-8 rounded-3xl group relative overflow-hidden border border-[#6F1511] hover:bg-[#5a110e] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-serif text-white/30 font-bold">05</span>
                  <BookOpen className="w-6 h-6 text-white/80" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-3 text-white">
                    Consultoria Jurídica
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Orientação preventiva para pessoas físicas e jurídicas. Análise de contratos e acompanhamento contínuo.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CONSULTORIA PREVENTIVA / CONTRATOS
          Seção focada na dor do cliente ("Assinou sem ler?") com a imagem do flyer.
          ========================================== */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-[#6F1511] font-bold mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#6F1511]" />
              Consultoria Preventiva
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              Assinou sem ler? <br/>
              <span className="text-[#6F1511] italic font-light">Ainda dá tempo de se proteger.</span>
            </h2>
            
            <p className="text-[#1E1E1E]/80 text-lg leading-relaxed mb-8">
              A orientação jurídica especializada faz toda a diferença <strong>antes e depois</strong> de assinar um contrato. Evite dores de cabeça, multas abusivas e cláusulas prejudiciais ao seu negócio ou patrimônio.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Análise e revisão de contratos",
                "Elaboração de documentos seguros",
                "Identificação de cláusulas abusivas",
                "Prevenção de litígios e prejuízos"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1E1E1E]/80" >
                  <CheckCircle2 className="w-5 h-5 text-[#6F1511] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#6F1511] text-[#F3F1ED] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#5a110e] transition-all hover:gap-4"
            >
              Solicitar Análise Contratual <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#E5E5E5] transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* 
                INSTRUÇÃO PARA IMAGEM DE CONTRATOS:
                1. Coloque a imagem do flyer/mockup na pasta "public" com o nome "foto-contratos.png" (ou .jpg).
                2. O 'object-cover' garante que a imagem preencha o espaço.
              */}
              <Image
                src="/foto-contratos.png"
                alt="Consultoria em Contratos"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F3F1ED] rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          DIFERENCIAIS / WHY CHOOSE ME
          Grid com os 4 pilares do atendimento.
          ========================================== */}
      <section id="diferenciais" className="py-16 md:py-24 px-6 bg-[#F3F1ED]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h3 className="text-sm uppercase tracking-widest text-[#6F1511] font-bold mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#6F1511]" />
              Por que me escolher
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E]">
              Meus <span className="text-[#6F1511] italic font-light">diferenciais</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="w-6 h-6" />,
                title: "Ética Profissional",
                desc: "Atuação pautada em valores sólidos, transparência e comprometimento com a verdade em cada etapa do processo.",
              },
              {
                icon: <User className="w-6 h-6" />,
                title: "Atendimento Humanizado",
                desc: "Escuta ativa e acolhimento genuíno, reconhecendo que por trás de cada processo há uma pessoa e sua história.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Clareza e Transparência",
                desc: "Comunicação direta e objetiva, mantendo você informado em cada fase do processo sem juridiquês desnecessário.",
              },
              {
                icon: <ArrowRight className="w-6 h-6" />,
                title: "Estratégia Eficiente",
                desc: "Análise criteriosa de cada caso para construir a melhor estratégia jurídica, sempre com foco no seu resultado.",
              },
            ].map((dif, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-[#C7C6C7]/60 hover:border-[#6F1511] transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="w-12 h-12 border border-[#6F1511] text-[#6F1511] flex items-center justify-center mb-6">
                  {dif.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E1E1E] mb-4">
                  {dif.title}
                </h3>
                <p className="text-[#1E1E1E]/70 leading-relaxed text-sm">
                  {dif.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ATENDIMENTO DIGITAL
          Seção focada no atendimento remoto com a imagem do notebook.
          ========================================== */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#E5E5E5]">
              {/* 
                INSTRUÇÃO PARA IMAGEM DO NOTEBOOK:
                1. Coloque a imagem do notebook na pasta "public" com o nome "foto-digital.png" (ou .jpg).
                2. O 'object-cover' garante que a imagem preencha o espaço.
              */}
              <Image
                src="/foto-digital.png"
                alt="Atendimento Jurídico Online"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F3F1ED] rounded-full blur-3xl opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-sm uppercase tracking-widest text-[#6F1511] font-bold mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#6F1511]" />
              Atendimento Digital
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              Advocacia <span className="text-[#6F1511] italic font-light">sem fronteiras</span>.
            </h2>
            
            <p className="text-[#1E1E1E]/80 text-lg leading-relaxed mb-6">
              A distância não é mais um obstáculo para ter acesso a uma defesa de excelência. Ofereço atendimento online para clientes em <strong>todo o Brasil e brasileiros no exterior</strong>.
            </p>

            <p className="text-[#1E1E1E]/80 text-lg leading-relaxed mb-8">
              A mesma proximidade, sigilo e dedicação do atendimento presencial, mas com a conveniência e agilidade que a sua rotina exige. Reuniões por videochamada, análise documental digital e acompanhamento processual 100% online.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#1E1E1E] text-[#F3F1ED] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#333333] transition-all hover:gap-4"
            >
              Agende uma reunião comigo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CONTATO / CONTACT FORM
          Formulário que redireciona os dados para o WhatsApp.
          ========================================== */}
      <section id="contato" className="py-16 md:py-24 px-6 bg-[#F3F1ED]">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-[#1E1E1E] text-[#F3F1ED] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6F1511] rounded-full blur-3xl opacity-20 -mr-20 -mt-20" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Vamos conversar?
              </h3>
              <p className="text-[#F3F1ED]/70 mb-12">
                Preencha o formulário para agilizar o atendimento. As
                informações serão enviadas diretamente para o meu WhatsApp
                profissional.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3F1ED]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#F3F1ED]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F3F1ED]/50 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="font-medium">(83) 98763-3502</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3F1ED]/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-[#F3F1ED]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F3F1ED]/50 uppercase tracking-wider">
                      Instagram
                    </p>
                    <p className="font-medium">@adv.iandrarocha</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3F1ED]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#F3F1ED]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F3F1ED]/50 uppercase tracking-wider">
                      Localização
                    </p>
                    <p className="font-medium">João Pessoa - PB</p>
                    <p className="text-sm text-[#F3F1ED]/80 mt-0.5">
                      Atendimento remoto para todo o Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 flex justify-center">
              <img
                src="/logo.png"
                alt="Iandra Rocha"
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-50"
              />
            </div>
          </div>

          <div className="md:w-3/5 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#1E1E1E] mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-[#C7C6C7] bg-[#F3F1ED]/50 focus:bg-white focus:ring-2 focus:ring-[#6F1511] focus:border-transparent transition-all outline-none"
                  placeholder="Ex: Maria Silva"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#1E1E1E] mb-2"
                >
                  Assunto Principal
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#C7C6C7] bg-[#F3F1ED]/50 focus:bg-white focus:ring-2 focus:ring-[#6F1511] focus:border-transparent transition-all outline-none"
                  placeholder="Ex: Consultoria Empresarial, Direito de Família..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1E1E1E] mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-[#C7C6C7] bg-[#F3F1ED]/50 focus:bg-white focus:ring-2 focus:ring-[#6F1511] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Descreva brevemente como posso te ajudar..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6F1511] text-[#F3F1ED] py-4 rounded-xl font-bold text-lg hover:bg-[#5a110e] transition-colors flex items-center justify-center gap-2"
              >
                Fale comigo no WhatsApp <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-center text-[#1E1E1E]/50 mt-4">
                Ao clicar, você será redirecionado para o WhatsApp com as
                informações preenchidas.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER / RODAPÉ
          Informações de contato finais e direitos autorais.
          ========================================== */}
      <footer className="bg-[#1E1E1E] text-[#F3F1ED] py-10 md:py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Iandra Rocha Advocacia & Consultoria Jurídica"
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#F3F1ED]/70">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (83) 98763-3502
            </span>
            <span className="flex items-center gap-2">
              <Instagram className="w-4 h-4" /> @adv.iandrarocha
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> João Pessoa - PB | Atendimento
              Nacional
            </span>
          </div>

          <div className="text-xs text-[#F3F1ED]/40">
            &copy; {new Date().getFullYear()} Iandra Rocha Advocacia. Todos os
            direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
