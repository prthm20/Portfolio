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
              Name: Pratham Angdalwar
            </p>
            <p className="text-lg text-black dark:text-neutral-200">
              Education: Bachelors of Technology
            </p>

            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases. The Air Jordan 4 Retro
              Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity 
              to get these right now is by entering raffles and waiting for the official releases.
            </p>

            <button className="flex items-center space-x-2 rounded-full bg-black px-4 py-2 text-white font-bold text-sm dark:bg-zinc-800">
              <span>Contact me</span>
            </button>
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
