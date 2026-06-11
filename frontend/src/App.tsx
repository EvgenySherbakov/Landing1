import { MessageCircle } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Advantages } from "./components/Advantages";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Advantages />
        <Reviews />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/74951234567"
        className="float-btn"
        aria-label="Написать в WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
