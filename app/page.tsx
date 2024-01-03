import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience/>
        </section>
        <section id="skills" className="snap-start">
          <Skills/>
        </section>
       <section id="projects" className="snap-start">
        <Projects/>
       </section>
       <section id="contact" className="snap-start">
        <Contact/>
       </section>
    <Link href='#hero'>
       <footer className="sticky bottom-5 w-full cursor-pointer z-50 ">
        <div className="flex items-center justify-center">
          <ArrowUpIcon className="h-10 w-10 rounded-full border border-gray-500/40 p-2 hover:bg-[#F7AB0A]"/>
        </div>
       </footer></Link>
      </div>
    </>
  );
}
