import VhsLogo from "./vhslogo";
import Image, { StaticImageData } from "next/image";

type ImageLogo = {
  type: "image";
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
};

type ComponentLogo = {
  type: "component";
  Component: React.ElementType;
  alt: string;
  className?: string;
};

type Logo = ImageLogo | ComponentLogo;

export const logos: Logo[] = [
  {
    type: "image",
    src: "/plana-adhoc.png",
    alt: "Plana Adhoc Logo",
    width: 150,
    height: 40,
  },
  {
    type: "image",
    src: "/victorelius.svg",
    alt: "Victorelius Logo",
    width: 180,
    height: 40,
  },
  { type: "component", Component: VhsLogo, alt: "VHS Logo" },
];

export default function AnimatedClients() {
  const numLogos = 9;
  const displayedLogos = logos
    .slice(0, numLogos)
    .concat(logos.slice(0, numLogos - (logos.length % numLogos)));
  return (
    <div className="relative w-full h-20 flex items-center justify-center">
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 lg:w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 lg:w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className="absolute left-0 flex animate-infinite-scroll group-hover:pause-animation">
        {displayedLogos.map((logo: Logo, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto mx-8 md:mx-12 lg:mx-16 flex items-center justify-center h-full"
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
  );
}
