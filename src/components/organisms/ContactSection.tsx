import ContactInfo from "../molecules/ContactInfo";
import ContactForm from "../molecules/ContactForm";

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center flex-1 px-6 md:px- py-8 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
