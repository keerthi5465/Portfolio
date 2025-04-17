
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Internship } from "@/components/sections/Internship";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-24">
        <Hero />
        <About />
        <Education />
        <Internship />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
