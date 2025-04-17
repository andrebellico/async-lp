import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { mockFaqs } from "@/mocks/faqs";

export default function FaqsSection() {
  return (
    <div className="flex flex-col gap-10 items-center mx-auto max-w-3xl justify-center py-20">
      <h2 className="text-[#FFFFFF] text-6xl text-center font-bold">
        Questões Frequentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="gap-5 w-full flex flex-col"
      >
        {mockFaqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
