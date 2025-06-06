import React from "react";
import Badge from "./ui/badge";
import AnimatedClients from "./animated-clients";

export default function ClientsSection() {
  return (
    <section className=" text-white  overflow-hidden relative">
      <div className="container mx-auto text-center mb-12 px-4">
        <Badge title="Clientes" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl ">Nossos Clientes</h2>
      </div>
      <AnimatedClients />
    </section>
  );
}
