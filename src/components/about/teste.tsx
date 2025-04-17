import { title } from "process";
import Badge from "../badge";

export default function Teste() {
  return (
    <>
      <div className="items-center flex-col text-center justify-center flex">
        <Badge title="NOSSOS VALORES" />
        <h2 className="text-6xl font-semibold text-white">
          Entregando <span className="text-[#F85B93]">excelência</span> em
          gerenciamento de
          <br />
          <span className="text-[#F85B93]">projetos</span>
        </h2>
      </div>
    </>
  );
}
