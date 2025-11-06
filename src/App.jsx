import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
