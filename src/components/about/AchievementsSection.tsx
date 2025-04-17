import React from "react";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import AnimatedClients from "../animated-clients";

export default function AchievementsSection() {
  return (
    <section className="flex flex-col justify-between gap-12 md:gap-24 overflow-hidden relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-12 md:gap-[100px]">
        <div className="flex flex-col gap-6 justify-center">
          <Badge title="Conquista" />
          <h2 className="text-4xl md:text-6xl">
            Destaque as <span className="text-[#F85B93]">conquistas</span> pelos
            <span className="text-[#F85B93]"> números</span>
          </h2>
          <div className="text-[#C6C7C6] text-[16px] leading-[28px] flex flex-col gap-4">
            <p>
              Capacitando equipes, impulsionando o sucesso: o impacto da Saasta
              nos números
            </p>
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
      <AnimatedClients />
    </section>
  );
}
