import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";

const ContactForm = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
      <form className="space-y-4">
        <Input placeholder="Full name*" />
        <Input placeholder="Email address*" />
        <Input placeholder="Subject" />
        <TextArea placeholder="Tell us more about your project*" />
        <Button label="Send message" />
      </form>
    </div>
  );
};

export default ContactForm;
