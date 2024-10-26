'use client';

import React from "react";
import { Vortex } from "./ui/vortex";
import { BackgroundGradient } from "./ui/background-gradient";
import { ExpandableCardDemo } from "./projectspot";
import Image from "next/image";

export function Intro() {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 bg-zinc-900 dark:bg-zinc-900 rounded-[22px] space-y-10">
      <BackgroundGradient className="w-full max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <Image
            src={'/port2.png'}
            alt="jordans"
            height={250}
            width={250}
            className="object-cover rounded-full border-4 border-gray-200 shadow-lg"
          />

          <div className="text-center sm:text-left space-y-4">
            <p className="text-xl font-semibold text-black dark:text-neutral-200">
              Naame: Pratham Angdalwar
            </p>
            <p className="text-lg text-black dark:text-neutral-200">
              Education: Bachelors of Technology
            </p>
            <p className="text-lg text-black dark:text-neutral-200">
             Machine Learning ,Deep Learning ,Full Stack
            </p>



            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
            Passionate about transforming ideas into innovative solutions, I specialize in Machine Learning, Deep Learning, and Full Stack Development. With expertise across the entire development stack, I bring a strong foundation in building intelligent systems and deploying scalable, user-friendly applications. My work focuses on harnessing data-driven insights to solve complex challenges, blending technical proficiency with a commitment to impactful, modern design.


            </p>

            <a href="mailto:aprathamm@gmail.com" target="_blank" rel="noopener noreferrer">
  <button className="flex items-center space-x-2 rounded-full bg-black px-4 py-2 text-white font-bold text-sm dark:bg-zinc-800">
    <span>📧 Contact Me</span>
  </button>
</a>
          </div>
        </div>

        <h1 className="mt-12 text-2xl font-semibold text-black dark:text-neutral-200">
          Projects
        </h1>
        <ExpandableCardDemo />
      </BackgroundGradient>
    </div>
  );
}
