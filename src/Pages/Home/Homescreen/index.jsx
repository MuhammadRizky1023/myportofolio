import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyBlog from "../MyBlog";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Organization from "../Organization";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <MyPortfolio />
      <MySkills />
      <MyBlog />
      <Organization />
      <ContactMe />
      <Footer />
    </div>
  );
}
