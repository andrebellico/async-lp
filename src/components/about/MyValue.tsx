import Badge from "../ui/badge";
import { values, ValueItem } from "../../mocks/values";

const ValueCard = ({ item }: { item: ValueItem }) => (
  <div
    key={item.id}
    className="flex flex-col items-center text-center p-6  rounded-lg"
  >
    <div className="mb-4">{item.icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
    <p className="text-sm text-gray-400">{item.description}</p>
  </div>
);

export default function MyValue() {
  return (
    <div className="py-16 bg-black">
      <div className="items-center flex-col text-center justify-center flex mb-12">
        <Badge title="NOSSOS VALORES" />
        <h2 className="text-4xl md:text-6xl  text-white mt-2">
          Entregando <span className="text-[#F85B93]">excelência</span> em
          <br />
          gerenciamento de <span className="text-[#F85B93]">projetos</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value) => (
          <ValueCard key={value.id} item={value} />
        ))}
      </div>
    </div>
  );
}
