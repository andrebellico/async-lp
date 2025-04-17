import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Badge from "./ui/badge";
import { Service } from "@/types";

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <div className="flex flex-col justify-between gap-12 md:gap-24">
      {services.map((service, i) => {
        return (
          <React.Fragment key={i}>
            {i % 2 === 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-12 md:gap-[100px]">
                <div className="flex flex-col gap-6 justify-center">
                  <Badge title={service.badge} />
                  <h2 className="text-5xl md:text-5xl lg:text-6xl">
                    {service.title}{" "}
                    <span className="text-[#F85B93]">{service.subtitle}</span>
                  </h2>
                  <div className="text-[#C6C7C6] text-[16px]  flex flex-col gap-4">
                    <p>{service.description}</p>
                  </div>
                  {service.button && (
                    <Button
                      variant="transparent"
                      className="w-fit"
                      href="https://api.whatsapp.com/send/?phone=5511919542750"
                    >
                      {service.button}
                    </Button>
                  )}
                </div>
                <div className="items-end justify-end text-end flex">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    className="rounded-2xl"
                    width={460}
                    height={460}
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-12 md:gap-[100px]">
                <div className="order-2 sm:order-1">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    className="rounded-2xl"
                    width={460}
                    height={460}
                  />
                </div>
                <div className="flex flex-col gap-6 justify-center order-1 sm:order-2">
                  <Badge title={service.badge} />
                  <h2 className="text-5xl md:text-5xl lg:text-6xl">
                    {service.title}{" "}
                    <span className="text-[#F85B93]">{service.subtitle}</span>
                  </h2>
                  <div className="text-[#C6C7C6] text-[16px]  flex flex-col gap-4">
                    <p>{service.description}</p>
                  </div>
                  {service.button && (
                    <Button
                      variant="transparent"
                      className="w-fit"
                      href="https://api.whatsapp.com/send/?phone=5511919542750"
                    >
                      {service.button}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
