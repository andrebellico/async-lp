import React from "react";
import Badge from "./ui/badge";

const depoimentos: { name: string; depoimento: string; cargo: string }[] = [
  {
    name: "Victor Victorelli",
    depoimento:
      "A Async mudou a forma como meu negócio se posiciona online. Em apenas uma semana, meu site estava no ar, e a qualidade superou minhas expectativas.",
    cargo: "CEO da Victorelius",
  },
  {
    name: "Alessandra Lima",
    depoimento:
      "Estava há aproximadamente 1 ano com a ideia de um simulador para automatizar e elevar a experiencia dos meus clientes, a equipe da ASYNC rapidamente entendeu minhas necessidades e desenvolveram um simulador eficiente permitindo que colocássemos para rodar em poucos meses. Equipe extremamente competente e sensíveis a adequação das demandas. Muito satisfeita com o resultado que alcançamos.",
    cargo: "Fundadora e CEO do PlanaAdhoc",
  },
];

export default function DepoimentosSection() {
  return (
    <section className=" text-white overflow-hidden relative">
      <div className="flex justify-center flex-col items-center text-center mb-12 px-4">
        <Badge title="Depoimentos" />
        <h2 className="text-6xl md:text-5xl font-bold">
          Veja o que nossos clientes falam sobre nossos serviços
        </h2>
      </div>
      <div className="relative w-full h-56 flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="absolute left-0 flex animate-infinite-scroll group-hover:pause-animation">
          {depoimentos.map((data, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full mx-8 md:mx-12 flex items-center justify-center h-full"
            >
              <div className="bg-[#1e1e1e00] rounded-xl border border-neutral-700  hover:scale-105 hover:bg-neutral-900 transition-all duration-300 p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-white">
                  {data.name}
                </h3>
                <p className="text-gray-300  mt-4 text-base ">
                  {data.depoimento}
                </p>
                <p className="text-gray-500 mt-2 text-sm">{data.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
