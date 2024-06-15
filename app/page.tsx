import Image from "next/image";
import Hero from "./components/hero/Hero";
import Testing from "./components/testing/Testing";
import Services from "./components/services/Services";
import Card from "./components/card/Card";
import CardContainer from "./components/card/CardContainer";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import BannerUpper from "./components/banner/BannerUpper";
import Faq from "./components/faq/Faq";
import Testimonial from "./components/testimonial/Testimonial";
import Training from "./components/training/Training";
import TrainingBanner from "./components/training/TrainingBanner";


export default function Home() {
  return (
    <>
    
    <Hero />
    <BannerUpper />
    <Services />
    <CardContainer />
    <Projects />
    <Testimonial />
    <TrainingBanner />
    <Training />
    <Faq />
    <Footer />
    </>
  );
}
