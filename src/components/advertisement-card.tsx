import { Button } from "./button";

export default function AdCard() {
  return (
    <div className="relative rounded-2xl bg-black text-white p-10 overflow-hidden border border-neutral-700 max-w-4xl mx-auto shadow-lg">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      <div className="relative z-10 flex flex-col items-center py-12 px-20  text-center space-y-5">
        <h2 className="text-[#FFFFFF] text-5xl text-center  leading-[64px] font-semibold">
          Pronto para elevar o nível do seu{" "}
          <span className="text-[#F85B93]">produto?</span>
        </h2>
        <span className="text-[#9C9C9B] text-[16px] leading-[28px] text-center">
          A cada dia que você passa hesitando, é uma oportunidade a mais para
          seu concorrente.
        </span>
        <Button variant="transparent">Quero uma Landing</Button>
      </div>
    </div>
  );
}
