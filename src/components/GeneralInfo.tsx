'use client'

import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function GeneralInfo() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[20rem] rounded-2xl w-full">
      <TextRevealCard
        text="one line at a time"
        revealText="Coding the future"
      >
       
        <TextRevealCardDescription>
          .
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
