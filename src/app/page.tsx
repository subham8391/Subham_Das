import Image from "next/image";
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/Data";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects/>
      </div>
     
    </main>
  );
}
