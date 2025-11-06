import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        {submitted && (
          <p className="mb-4 text-green-500 text-center">Thanks! We'll get back to you soon.</p>
        )}
        <form
     action="https://formspree.io/f/meopyrbr"
      method="POST"
      className="flex flex-col space-y-4 max-w-md mx-auto"
    >
      <input type="text" name="name" placeholder="Your Name" required
        className="p-2 border rounded" />
      <input type="email" name="_replyto" placeholder="Your Email" required
        className="p-2 border rounded" />
      <textarea name="message" placeholder="Your Message" required
        className="p-2 border rounded"></textarea>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
      </div>
    </section>
  );
}
