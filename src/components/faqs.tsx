import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { mockFaqs } from "@/mocks/faqs";

export default function FaqsSection() {
  return (
    <div className="div">
      <h2>Questões Frequentes</h2>
      <Accordion type="single" collapsible className="w-full">
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
