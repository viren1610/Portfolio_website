import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/About";
import Myproject from "@/components/Myproject";
import Skills from "@/components/skills";
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
    <Intro/>
    <SectionDivider/>
    <About/>
    <Myproject/>
    <Skills/>
    <Experience/>
    </main>
  )
}
