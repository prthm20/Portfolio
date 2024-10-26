'use client';

import React from "react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa"; // Assuming you're using react-icons
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGoogle,
  Icon3dCubeSphere,
  IconBrandX,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhoneCall,
  IconLocation
} from "@tabler/icons-react"

export function Navbar({ className }: { className?: string }) {
  return (
    <div className={`fixed top-5 right-5 flex space-x-4 ${className} `}>


     {/* Social icons */}
     <div className="flex space-x-4 mt-4 bg-white">
              
              <Link href={"https://x.com/PrathamAngdlwar"}>< IconBrandX/></Link>
             
              
              <Link href={"https://www.instagram.com/prthm2004/"}><IconBrandInstagram/></Link>
              
               <Link href={"https://github.com/prthm20"}><IconBrandGithub/></Link>
             
            </div>
    </div>
  );
}
