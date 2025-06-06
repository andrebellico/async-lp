// src/components/about/AboutUsSection.tsx
import React from "react";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutUsSection() {
  return (
    <section className="flex flex-col justify-between gap-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10 md:gap-[100px]">
        <div className="flex flex-col md:text-start text-center gap-6 md:items-start items-center justify-center">
          <Badge title="  Sobre Nós" />
          <h2 className="text-4xl md:text-6xl">
            <span className="text-[#F85B93]">Revolucionando</span> o
            gerenciamento de projetos com Async
          </h2>
          <Button
            className="w-fit"
            href="https://api.whatsapp.com/send/?phone=5511919542750"
          >
            CONTATE-NOS
          </Button>
        </div>
        <div className="items-end justify-end text-end flex">
          <div className="text-[#C6C7C6] text-[14px] md:text-[16px] text-center leading-[24px] md: flex flex-col gap-4">
            <p>
              Na Async, nossa jornada começou com uma ideia simples, mas
              poderosa: revolucionar o gerenciamento de projetos para equipes de
              todos os tamanhos.
            </p>

            <p>
              Frustrados com as complexidades e limitações das soluções
              existentes, decidimos criar uma plataforma que capacitasse as
              equipes a colaborar de forma mais eficaz, simplificar os fluxos de
              trabalho e impulsionar o sucesso.
            </p>

            <p>
              Com uma equipe de desenvolvedores apaixonados e especialistas em
              gerenciamento de projetos, embarcamos em uma jornada de inovação e
              iteração.
            </p>
            <p>
              Ouvimos as necessidades de nossos usuários, coletamos feedback e
              aprimoramos continuamente nossa plataforma para atender às
              crescentes demandas das empresas modernas.
            </p>

            <p>
              Hoje, Async é uma prova de nosso compromisso com a excelência e de
              nossa busca incansável por melhorias. Temos orgulho em fornecer
              uma solução que não apenas atenda às necessidades de nossos
              usuários, mas também supere suas expectativas. À medida que
              continuamos a crescer e a evoluir, a nossa dedicação em capacitar
              as equipas com soluções inovadoras de gestão de projetos permanece
              inabalável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
