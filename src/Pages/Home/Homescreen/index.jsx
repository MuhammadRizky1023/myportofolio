import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import CV from "../CV";
import FAQ from "../faq";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyBlog from "../MyBlog";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Organization from "../Organization";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyPortfolio />
      <MySkills />
      <CV/>
      <MyBlog />
      <Organization />
      <FAQ/>
      <ContactMe />
      <Footer />
    </>
  );
}
