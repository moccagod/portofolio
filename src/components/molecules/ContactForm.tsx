import { useState } from "react";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import ButtonForm from "../atoms/ButtonForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwF6H0zroIgOju2yyTGNzvI3iUxxGoYvvtvzBLmT-XWhgUWRT4MnTv9BxtSpIEJbJU2pw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.text();
      console.log("Response:", result);
      alert("Message sent successfully!");

      // 🔄 Reset form setelah berhasil dikirim
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="fullName"
          placeholder="Your Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input
          name="email"
          placeholder="YourEmail@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Tell us more about your project"
          value={formData.message}
          onChange={handleChange}
        />
        <ButtonForm type="submit" label="Send message" />
      </form>
    </div>
  );
};

export default ContactForm;
