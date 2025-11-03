"use client"

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from 'next/image'
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";

import logo from  '../src/Images/NOMR_logo_small.png'
import menubar from "@/app/src/Images/menubar.png"

export default function Navbar( { disappear } ) {
  
  const [navOpen, setNavOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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
    <>
    <nav className={`fixed p-2 z-30 left-0 top-0 lg:px-[10vw] right-0 border-b ${navbar_border_color} w-auto top-0 ${navbar_color} text-primary-50 sm: duration-300`} >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex flex-row p-2 rounded-md space-x-2 font-medium text-lg md:hover:underline hover:invert hover:bg-primary-950 duration-300">
          <Image className="hover:rotate-[5deg] duration-300" width={50} height={50} alt="The logo for NOMR" src={logo}></Image> 
          <p className="text-2xl md:text-lg">NOMR</p>
        </Link>
        <Image 
          className="sm:hidden cursor-pointer mr-2 z-30"
          onClick={() => setNavOpen(!navOpen)}
          src={menubar}
          width={30}
          alt="menubar icon"
        />
        <ul className="flex hidden sm:flex h-full items-center justify-end text-sm font-medium">
          <NavbarDropdown name="About &#9660;" href="/about" items={about_dropdown}/>
          <NavbarItem name="Simulations" href="/sim"/>
          <NavbarItem name="Join" href="/join"/>
          <NavbarItem name="FAQ" href="/faq"/>
        </ul>
      </div>
    </nav>
    <div className={`text-xl text-primary-50 fixed top-0 pt-16 flex flex-col text-right bg-secondary-700/50 ${navOpen ? `right-0` : `-right-1/2`} backdrop-blur-xl duration-300 h-[100vh] w-1/2 z-20`}>
          <button className="duration-300 text-right hover:bg-secondary-200/50 py-2 px-4" onClick={() => setAboutOpen(!aboutOpen)}>About &#9660;</button>
          {aboutOpen && <div className="bg-secondary-950/50 flex flex-col">
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/about">Mission Statement</Link>
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/about/lab">Lab Setup</Link>
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/about/affiliates">Affiliates</Link>
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/about/alum">Alumni</Link>
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/about/contact">Contact Us</Link>
          </div>
          }
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/sim">Simulations</Link>
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/join">Join</Link>
          <Link onMouseUp={() => setNavOpen(false)} className="duration-300 hover:bg-secondary-200/50 py-2 px-4" href="/faq">FAQ</Link>
          <button className="duration-300 hover:bg-secondary-200/50 py-2 px-4" onClick={() => setNavOpen(false)}>&#215;</button>
        </div>
    </>
  )
}
