"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import logo from  '../src/Images/NOMR_logo_small.png'
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar( { disappear } ) {
  
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const about_dropdown = [
    {
      id: 1,
      name: "Lab Setup",
      href: "/about/lab"
    },
    {
      id: 3,
      name: "Affiliates",
      href: "/about/affiliates"
    },
    {
      id: 2,
      name: "Alumni",
      href: "/about/alum"
    },
    {
      id: 4,
      name: "Contact Us",
      href: "/about/contact"
    }
  ]
  
  const navbar_color = (scrollY < 10) ? "bg-transparent" : "bg-secondary-700";
  const navbar_border_color = (scrollY < 10) ? "border-transparent" : "border-secondary-600";
  
  return (
    <nav className={`fixed p-2 z-20 left-0 top-0 lg:px-[10vw] right-0 border-b ${navbar_border_color} w-auto top-0 ${navbar_color} text-primary-50 sm: duration-300`} >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex flex-row p-2 rounded-md space-x-2 font-medium text-lg md:hover:underline hover:invert hover:bg-primary-950 duration-300">
          <Image className="hover:rotate-[5deg] duration-300" width={50} height={50} alt="The logo for NOMR" src={logo}></Image> 
          <p>NOMR</p>
        </Link>
        <ul className="flex h-full items-center justify-end text-sm font-medium">
          <NavbarDropdown name="About &#9660;" href="/about" items={about_dropdown}/>
          <NavbarItem name="Simulations" href="/sim"/>
          <NavbarItem name="Join" href="/join"/>
          <NavbarItem name="FAQ" href="/faq"/>
        </ul>
      </div>
    </nav>
  )
}
