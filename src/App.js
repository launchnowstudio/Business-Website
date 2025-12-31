import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pages from "./components/Pages";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Pages/>
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;
