"use client"

import Image from "next/image"
import SectionHeader from "./components/SectionHeader"
import { Carousel } from "./components/Carousel"

import bubble_chamber from "./src/Images/bubble_chamber.png"
import nomr_logo from "./src/Images/NOMR_logo_small.png"
import nomr_p_1 from "./src/Images/nomr_p_1.jpg"
import nomr_p_2 from "./src/Images/nomr_p_2.jpg"
import nomr_p_3 from "./src/Images/nomr_p_3.png"
import nomr_p_4 from "./src/Images/nomr_p_4.png"
import nomr_p_5 from "./src/Images/nomr_p_5.png"
import nomr_p_6 from "./src/Images/nomr_p_6.png"

import { useState, useEffect } from "react"
import InternalLink from "./components/WebLink"
import Article from "./components/Article"

export default function Home() {
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

  const carousel_p_1 = [
    {
      id : 0,
      href : nomr_p_1,
      alt : "A group of students using NOMR in a lab setting.",
      type: "photo"
    },
    {
      id : 1,
      href : nomr_p_2,
      alt : "A group of students using NOMR in a lab setting.",
      type: "photo"
    },
    {
      id : 2,
      href : nomr_p_3,
      alt : "A screenshot of the charge tool being used in the simulation.",
      type: "photo"
    },
    {
      id : 3,
      href : nomr_p_4,
      alt : "A screenshot of the NOMR tutorial pane, showing instructions to the lab.",
      type: "photo"
    },
    {
      id : 4,
      href : nomr_p_5,
      alt : "A screenshot of an experiment set up with two charged particles and a force meter.",
      type: "photo"
    },
    {
      id : 5,
      href : nomr_p_6,
      alt : "A cut-out screenshot depicting the user pointing at an anchored particle.",
      type: "photo"
    },
    {
      id : 6,
      href : "https://drive.google.com/file/d/1jxcbD94OIB564LQ2zEK_hG8JzbgA0WfR/preview?authuser=0",
      alt : "A video demonstrating the NOMR simulation space",
      type: "video"
    }
  ]

  return (
  <>
    <div className="relative w-full h-[100vh]">
      <Image
        alt="An image of the trails observed in bubble chambers."
        className={`absolute object-cover w-full h-full`}
        src={bubble_chamber}
        full="true"
        preload="true"
        loading="eager"
        style={{ objectPosition : `center ${scrollY / 3}px`}}
      />
      <div className="relative flex flex-col text-center top-[25vh] z-1 mx-24 space-y-4 text-primary-50">
          <Image
          className="mx-auto hover:-rotate-[3deg] duration-300"
          alt="The NOMR logo."
          src={nomr_logo}
          width={500}
          height={500}
          />
        <p className="text-7xl font-bold">
          NOMR
        </p>
        <p className="italic">
          Novel Observations in Mixed Reality
        </p>
      </div>
    </div>
    <Article>
      <SectionHeader>What is NOMR?</SectionHeader>
      <div className="flex flex-col lg:flex-row lg:space-x-16 my-12">
        <div className="my-auto">
          <Image
          height={1600}
          alt="An image of students using NOMR in the classroom."
          src={nomr_p_1}
          placeholder="blur"
          />
        </div>
        <div className="flex flex-col space-y-6 text-left my-8 place-contents-center mx-8" data-aos="fade-up">
          <p>NOMR (Novel Observations in Mixed Reality) is an augmented reality application used in the UW Introductory Physics Lab curriculum.</p>
          <p>In NOMR, students are presented with fictitious particles and challenged to develop a mathematical model explaining their interactions.</p>
          <p>Students work together, typically in teams of 4, to gather data and build an understanding of how these particles interact.  The only correct answers are the ones the students can make the best case for, based on the data they collect.</p>
          <InternalLink href="/sim">See our simulations here</InternalLink>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse my-12">
        <div className="my-auto">
          <Image
          height={1600}
          alt="An image of students using NOMR in the classroom."
          src={nomr_p_2}
          placeholder="blur"
          />
        </div>
        <div className="flex flex-col lg:mr-16 space-y-6 text-left my-8 place-contents-center" data-aos="fade-up">
          <p>The focus is on developing experimental skills and an authentic, hands-on understanding of how science works.</p>
          <p>Learning outcomes for scientific model development have been significantly increased, and there is no risk of confirmation bias in the virtual lab experiments.</p>
          <p>Currently over 1800 students from across campus use the NOMR app each year as part of their Intro Physics lab course. </p>
          <InternalLink href="/join">Apply to work with us here</InternalLink>
        </div>
      </div>
      <SectionHeader>Media</SectionHeader>
      <Carousel items={carousel_p_1} start_index={2}/>
    </Article>
  </>
  )
}




