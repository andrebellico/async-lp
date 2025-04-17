export interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageSrc: string;
    fallback: string;
    description: string;
  }
  

export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Lucas Bezerra",
      role: "CEO & Founder",
      imageSrc: "https://github.com/bezerra-lucas.png",
      fallback: "LU",
      description:
        "Lucas Bezerra é o CEO e fundador da empresa, responsável pela visão estratégica e liderança geral.",
    },
    {
      id: 2,
      name: "Eduardo Barroso",
      role: "CEO & Founder",
      imageSrc: "https://github.com/Eduardo-BarrosoS.png",
      fallback: "EDU",
      description:
        "Eduardo Barroso é o CEO e fundador da empresa, focado no desenvolvimento de novos negócios e parcerias estratégicas.",
    },
    {
      id: 3,
      name: "André Bellico",
      role: "Lead Designer & Developer",
      imageSrc: "https://github.com/andrebellico.png",
      fallback: "PE",
      description:
        "André Bellico é o Lead Designer & Developer, responsável pela criação de interfaces intuitivas e desenvolvimento de soluções inovadoras.",
    },
    {
      id: 4,
      name: "Gabriel Gois",
      role: "Developer",
      imageSrc: "https://github.com/gabrielgoisdoni.png",
      fallback: "GG",
      description:
        "Gabriel Gois é um desenvolvedor da empresa, contribuindo para o desenvolvimento e manutenção de nossos produtos e serviços.",
    },
  ];