import { DifferenceCard } from "@/types";
import { UserIcon } from "lucide-react";

interface DifferenceCardsProps {
  cards: DifferenceCard[];
}

export default function DifferenceCards({ cards }: DifferenceCardsProps) {
  return (
    <div className="container mx-auto flex flex-col gap-10 items-center justify-center py-20">
      <h2 className="text-[#FFFFFF] text-6xl text-center font-semibold">
        Diferenciais
      </h2>
      <div className="grid grid-cols-2 gap-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#1e1e1e00] rounded-xl border border-neutral-700 hover:scale-105 hover:bg-neutral-900 transition-all duration-300
             p-8 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#20211F] rounded p-2">
                <UserIcon className="h-6 w-6 text-[#F85B93]" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-300 mt-4 text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
