import React from "react";
import { Presentation, Share2, FileCog } from "lucide-react"; // Import Lucide icons

export interface ValueItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    id: 1,
    icon: <Presentation className="h-10 w-10 text-[#F85B93]" />, // Use Lucide icon
    title: "Interface intuitiva",
    description:
      "A interface amigável do Async facilita a navegação e a utilização de seus recursos pelas equipes sem treinamento extensivo, aumentando a produtividade desde o primeiro dia.",
  },
  {
    id: 2,
    icon: <Share2 className="h-10 w-10 text-[#F85B93]" />, // Use Lucide icon
    title: "Colaboração perfeita",
    description:
      "Com ferramentas de comunicação em tempo real e compartilhamento centralizado de arquivos, o Async facilita a colaboração perfeita entre os membros da equipe, independentemente de sua localização.",
  },
  {
    id: 3,
    icon: <FileCog className="h-10 w-10 text-[#F85B93]" />, // Use Lucide icon
    title: "Personalização flexível",
    description:
      "Adapte o Async aos fluxos de trabalho exclusivos da sua equipe com listas de tarefas personalizáveis, modelos de projetos e ferramentas de relatórios, proporcionando uma experiência personalizada.",
  },
];
