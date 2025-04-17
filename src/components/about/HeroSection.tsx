import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center h-[60vh] mt-20 justify-center gap-4">
      <h1 className="text-white text-6xl text-center">
        <span className="text-[#F85B93]">Capacitando</span> equipes com soluções
        inovadoras de <span className="text-[#F85B93]">gerenciamento</span> de
        projetos
      </h1>
      <div className="text-gray-300 text-[16px] leading-[28px] text-center">
        Descubra nossa história, missão e compromisso para simplificar os fluxos
        de trabalho dos projetos
      </div>
    </section>
  );
}
