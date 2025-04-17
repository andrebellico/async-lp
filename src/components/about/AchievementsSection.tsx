// src/components/about/AchievementsSection.tsx
import React from "react";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import { extendedLogos } from "../clients-section";

const AchievementsSection = () => {
  return (
    <section className="flex flex-col justify-between gap-24 overflow-hidden relative">
      <div className="grid grid-cols-2 justify-between items-center gap-[100px]">
        <div className="flex flex-col gap-6 justify-center">
          <Badge title="Conquista" />
          <h2 className="text-6xl">
            Destaque as <span className="text-[#F85B93]">conquistas</span> pelos
            <span className="text-[#F85B93]"> números</span>
          </h2>
          <div className="text-[#C6C7C6] text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Capacitando equipes, impulsionando o sucesso: o impacto da Saasta
              nos números
            </p>
            <p>500+ Projetos concluídos</p>
          </div>
        </div>
        <div className="items-end justify-end text-end flex">
          <div className="items-end justify-end text-end flex">
            <Image
              src="/conquista.avif"
              alt="Imagem ilustrativa de conquista"
              className="rounded-2xl w-full"
              width={460}
              height={460}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-20 flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="absolute left-0 flex animate-infinite-scroll group-hover:pause-animation">
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-auto mx-8 md:mx-12 flex items-center justify-center h-full"
            >
              {logo.type === "image" ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-[40px] w-auto object-contain"
                />
              ) : (
                <logo.Component
                  className={logo.className || "max-h-[40px] w-auto"}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
