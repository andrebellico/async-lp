import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center h-[60vh] mt-20 justify-center gap-4 sm:h-[40vh] md:h-[50vh]">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center">
        <span className="text-[#F85B93]">Capacitando</span> equipes com soluções
        inovadoras de <span className="text-[#F85B93]">gerenciamento</span> de
        projetos
      </h1>
      <div className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-center">
        Descubra nossa história, missão e compromisso para simplificar os fluxos
        de trabalho dos projetos
      </div>
    </section>
  );
}
