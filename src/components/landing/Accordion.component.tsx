import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <div className="w-full px-60 mb-20">
      <h1 className="font-extrabold text-2xl">
        Most Frequently Asked Questions.:
      </h1>
      <br />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is telemedicine?</AccordionTrigger>
          <AccordionContent>
            Telemedicine is the use of digital communication technologies, such
            as video calls and messaging, to provide medical care and
            consultation remotely.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I schedule an appointment?</AccordionTrigger>
          <AccordionContent>
            You can schedule an appointment through the telemedicine app by
            selecting a suitable date and time, often with an option to choose
            your preferred healthcare provider.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is telemedicine secure?</AccordionTrigger>
          <AccordionContent>
            Yes, telemedicine platforms use encryption and adhere to privacy
            regulations like HIPAA to ensure that your medical information is
            secure and confidential.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What types of medical issues can be addressed via telemedicine?
          </AccordionTrigger>
          <AccordionContent>
            Telemedicine can handle a variety of issues, including routine
            check-ups, follow-ups, chronic condition management, minor
            infections, mental health consultations, and prescription refills.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do I need special equipment for a telemedicine appointment?
          </AccordionTrigger>
          <AccordionContent>
            Typically, you only need a smartphone, tablet, or computer with an
            internet connection, a camera, and a microphone for video
            consultations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
