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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eius enim explicabo necessitatibus itaque.",
    },
    {
      id: 2,
      name: "Eduardo Barroso",
      role: "CEO & Founder",
      imageSrc: "https://github.com/Eduardo-BarrosoS.png",
      fallback: "EDU",
      description:
        "Aperiam sunt autem itaque saepe laborum possimus, labore unde, necessitatibus eaque dolores neque.",
    },
    {
      id: 3,
      name: "André Bellico",
      role: "Lead Designer & Developer",
      imageSrc: "https://github.com/andrebellico.png",
      fallback: "PE",
      description:
        "Repellendus, consequatur deleniti. Maxime eius enim explicabo necessitatibus itaque.",
    },
    {
      id: 4,
      name: "Gabriel Gois",
      role: "Developer",
      imageSrc: "https://github.com/gabrielgoisdoni.png",
      fallback: "GG",
      description:
        "Repellendus, consequatur deleniti. Maxime eius enim explicabo necessitatibus itaque.",
    },
  ];