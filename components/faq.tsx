import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FaqItem {
    question: string;
    answer: string;
  }
  
  interface Faq1Props {
    heading?: string;
    items?: FaqItem[];
  }
  
  const Faq1 = ({
    heading = "Common Questions",
    items = [
      {
        question: "How long does shipping take?",
        answer:
          "We offer standard shipping (3-5 business days) and express shipping (1-2 business days) options. International shipping times may vary depending on the destination.",
      },
      {
        question: "What's your return policy?",
        answer:
          "We offer a hassle-free 30-day return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange.",
      },
      {
        question: "Are my payments secure?",
        answer:
          "Yes, we use industry-standard SSL encryption and partner with trusted payment providers to ensure your transaction data is always secure.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see specific details during checkout.",
      },
    ],
  }: Faq1Props) => {
    return (
      <section className="w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 tracking-tighter">
            {heading}
          </h1>
          <div className="max-w-3xl mx-auto">
            {items.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-b border-muted">
                  <AccordionTrigger className="text-lg md:text-xl font-semibold py-6 hover:text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Faq1 };