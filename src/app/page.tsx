'use client'

import Image from "next/image";
import { Intro } from "@/components/Intro";
import {GeneralInfo} from "@/components/GeneralInfo"
import { ProjectText} from "@/components/projects";
import { AnimatedPin } from "@/components/ProjectCards";
import  Footer  from "@/components/Footer";
import { AnimatedPin2 } from "@/components/ProjextCards2";

export default function Home() {
  return (
    <main >
      <div >
        <Intro/>
        <GeneralInfo/>
        <ProjectText/>
        <AnimatedPin/>
        <AnimatedPin2/>
        <Footer/>
        
      </div>
    </main>
  );
}
