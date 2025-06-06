"use client";
import { Button } from "@/components/ui/button";
import ClientsSection from "@/components/clients-section";
import MethodAsync from "@/components/method-async";
import ServicesSection from "@/components/services";
import { sampleServices } from "@/mocks/services";
import DifferenceCards from "@/components/difference-cards";
import { sampleDifferenceCards } from "@/mocks/difference-cards";
import DepoimentosSection from "@/components/depoimentos";
import AdCard from "@/components/advertisement-card";
import FaqsSection from "@/components/faqs";
import AnimatedSection from "@/components/animated-section";

export default function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black mx-auto max-w-[1200px] text-white ">
        <main className="flex flex-col w-full gap-20">
          <AnimatedSection>
            <section className="flex flex-col items-center h-[60vh] mt-20 justify-center gap-4">
              <h1 className="text-white sm:text-5xl md:text-5xl lg:text-6xl text-5xl text-center">
                <span className="text-[#F85B93]">Transformamos</span> o seu site
                em uma máquina de {""}
                <span className="text-[#F85B93]">vendas</span>
              </h1>
              <div className="text-gray-300 sm:text-sm lg:text-base md:text-[16px] text-sm  text-center">
                Criamos sites que aparecem primeiro nas pesquisas do Google
                (SEO), inspiram confiança e atraem clientes
              </div>
              <div className="flex md:flex-col sm:flex-col lg:flex-row flex-col items-center gap-2.5 mt-4">
                <Button
                  href="https://api.whatsapp.com/send/?phone=5511919542750"
                  variant="default"
                >
                  QUERO FAZER MEU NEGÓCIO CRESCER
                </Button>
                <Button
                  variant="transparent"
                  href="https://api.whatsapp.com/send/?phone=5511919542750"
                >
                  QUERO SABER MAIS
                </Button>
              </div>
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <ClientsSection />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <MethodAsync />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ServicesSection services={sampleServices} />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <DifferenceCards cards={sampleDifferenceCards} />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <DepoimentosSection />
          </AnimatedSection>
          <AnimatedSection>
            <ClientsSection />
          </AnimatedSection>
          <AnimatedSection>
            <FaqsSection />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <AdCard />
          </AnimatedSection>
        </main>
      </div>
    </>
  );
}
