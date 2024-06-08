import Image from "next/image";
import Hero from "./components/hero/Hero";
import Testing from "./components/testing/Testing";
import Services from "./components/services/Services";
import Card from "./components/card/Card";
import CardContainer from "./components/card/CardContainer";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    <>
    
    <Hero />
    <Services />
    <CardContainer />
    <Projects />
    <Footer />
    </>
  );
}
