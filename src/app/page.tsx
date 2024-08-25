import Image from "next/image";
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/Data";
import Clients from "@/Components/Clients";
import Experience from "@/Components/Experience";
import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
     
    </main>
  );
}
