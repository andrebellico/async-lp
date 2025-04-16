"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/button";
import ClientsSection from "@/components/clients-section";
import MethodAsync from "@/components/method-async";
import ServicesSection from "@/components/services";
import { sampleServices } from "@/mocks/services";
import DifferenceCards from "@/components/difference-cards";
import { sampleDifferenceCards } from "@/mocks/difference-cards";
import DepoimentosSection from "@/components/depoimentos";
import AdCard from "@/components/advertisement-card";

export default function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black mx-auto max-w-[1200px] text-white ">
        <main className="flex flex-col w-full gap-20">
          <motion.section
            className="flex flex-col items-center h-[60vh] mt-20 justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white text-6xl text-center">
              <span className="text-[#F85B93]">Transformamos</span> o seu site
              em uma máquina de {""}
              <span className="text-[#F85B93]">vendas</span>
            </h1>
            <div className="text-gray-300 text-[16px] leading-[28px] text-center">
              Criamos sites que aparecem primeiro nas pesquisas do Google (SEO),
              inspiram <br />
              confiança e atraem clientes
            </div>
            <motion.div
              className="flex gap-2.5 mt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button variant="default">QUERO FAZER MEU NEGÓCIO CRESCER</Button>
              <Button variant="transparent">QUERO SABER MAIS</Button>
            </motion.div>
          </motion.section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ClientsSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }} // Slight delay
          >
            <MethodAsync />
          </motion.div>
          <motion.section
            id="services"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }} // Slight delay
          >
            <ServicesSection services={sampleServices} />
          </motion.section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }} // Slight delay
          >
            <DifferenceCards cards={sampleDifferenceCards} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }} // Slight delay
          >
            <DepoimentosSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }} // Slight delay
          >
            <AdCard />
          </motion.div>
        </main>
      </div>
    </>
  );
}
