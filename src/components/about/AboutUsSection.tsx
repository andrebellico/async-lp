// src/components/about/AboutUsSection.tsx
import React from "react";
import Badge from "@/components/badge";
import { Button } from "@/components/button";

const AboutUsSection = () => {
  return (
    <section className="flex flex-col justify-between gap-24">
      <div className="grid grid-cols-2 justify-between items-center gap-[100px]">
        <div className="flex flex-col gap-6 justify-center">
          <Badge title="  Sobre Nós" />
          <h2 className="text-6xl">
            <span className="text-[#F85B93]">Revolucionando</span> o
            gerenciamento de projetos com Async
          </h2>
          <Button className="w-fit">CONTATE-NOS</Button>
        </div>
        <div className="items-end justify-end text-end flex">
          <div className="text-[#C6C7C6] text-[16px] text-center leading-[28px] flex flex-col gap-4">
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
};

export default AboutUsSection;
