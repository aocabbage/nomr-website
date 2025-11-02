"use client"

import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import {useState, useEffect} from "react";

import bubble_chamber from "../src/Images/bubble_chamber.png"

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

    return(
    <>
        <PageHeader title="Mission Statement" subtitle="From the Student Development Group"/>
        <Article>
            <SectionHeader>Objectives</SectionHeader>
            <p data-aos="fade-up">
                The development and deployment of the NOMR VR lab application, has been a tremendous success, bringing cutting edge technology and education to over 1800 undergraduate students a year since its initial deployment in the Introductory Physics Labs curriculum during Winter Quarter 2020.  To continue the development of the NOMR VR lab application we are expanding the current software development team by creating a student VR lab software developer hub.  This allows for the successful continuation and expansion of the NOMR VR application, and also provides invaluable applied programming experience to student developers interested in becoming part of this project. 
            </p>
            <SectionHeader>Core Justification</SectionHeader>
            <p data-aos="fade-up">
                The development of the NOMR VR lab application, as used in the Introductory Physics Laboratories, has established the UW and PEG (Physics Education Group) as leaders at the forefront of the burgeoning VR education field, and enhanced the education of undergraduate students taking Introductory Physics Laboratory courses.  To maintain this position through the continuing development and expansion of the NOMR VR lab application, an expansion of the development team is required.  In addition to the enhancements to undergraduate education, this expansion will also increase opportunities for the student developers working on the NOMR VR lab application development with significant relevance to employment and research prospects in the field of VR development.  Further, this to reduces barriers to entry for students interested in doing VR physics education research, by providing access to all VR hardware they would need for their work, regardless of their own technological/economic situation.  The expertise and  involvement of the Introductory Physics Labs Team oversee and coordinate the student developer hub facilitating the expansion of this program.
            </p>
            <SectionHeader>Impact</SectionHeader>
            <p data-aos="fade-up">
                The expansion of the NOMR Student Developer Group will increase the capability for outreach programs, allowing PEG to share this new technology and expertise across departments, throughout the UW community.
            </p>
            <p data-aos="fade-up">
                Students joining the NOMR Student Developer Group benefit from applied experience with software development and support in the areas of 3D modeling; VFX artistry; and VR UX design.  In addition to software development skills, these academic physics skills can also be developed: Numerical methods in physics; working with real-time physics engines; evaluating and optimizing performance of numerical physics simulations.
            </p>
        </Article>
    </>
    )
}

function ListItem({url, children}) {
    return(
        <li className="hover:underline hover:text-secondary-600 text-primary-900">
            <Link href={url}>&#62; {children}</Link>
        </li>
    )
}