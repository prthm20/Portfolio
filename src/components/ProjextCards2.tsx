'use client'
import Image from "next/image";

import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPin2() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center mt-0">
      <PinContainer
        title="Travlog"
        href="https://wonderfull-world-tpe9.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Travlog
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Travlog :plan|organise|locate|getinfo of your tirp
            </span>
          </div>
          <div>
            <Image src={'https://images.pexels.com/photos/27273020/pexels-photo-27273020.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" width={500} height={500}></Image>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br  " />
        </div>
      </PinContainer>
    </div>
  );
}
