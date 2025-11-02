"use client"

import PageHeader from "@/app/components/PageHeader";
import SectionHeader from "@/app/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Article from "@/app/components/Article"

import lab_materials from "../../src/Images/lab_materials.jpg"

export default function Home() {
    return(
        <>
            <PageHeader title="Lab Setup" subtitle="How to get ready to use NOMR"/>
            <Article>
                <SectionHeader>Setup</SectionHeader>
                <div className="flex flex-col w-full space-y-4 place-content-between">
                    <Image
                        src={lab_materials}
                        width={1280}
                        placeholder="blur"
                        alt="A picture of a table with lab materials on it."
                        className="my-auto h-full mx-auto"
                    />
                    <div className="mr-12 space-y-4">
                        <b data-aos="fade-up">
                            Equipment:
                        </b>
                        <ul className="list-disc indent-8 list-inside space-y-2" data-aos="fade-up">
                            <li>Oculus Headset + Controllers</li>
                            <li>USB Cable (male-to-male)</li>
                            <li>Computer</li>
                            <li>Screen Copy Software</li>
                            <li>NOMR app</li>
                        </ul>
                        <p data-aos="fade-up">
                            UW Physics Department runs NOMR for 3-4 weeks each quarter in up to 3 rooms at a time. The lab courses that currently utilize NOMR are PHYS118, PHYS122, PHYS142 and PHYS231.
                        </p>
                    </div>
                </div>
                <p data-aos="fade-up">Each rooms has 8 stations (8 headsets) with 4-5 students per group. One student uses the headset while the other students observe the user’s vision via a screen copy software. We use the scr cpy software on Windows 11. Computers uses in class include the Dell OptiPlex 7000 series and the Dell Inspiron AIO 5415, but any computer can be used.
                </p> 
                <SectionHeader>Helpful Links</SectionHeader>
                <div className="flex flex-col space-y-4 my-8 text-link-500">
                    <Link className="hover:underline" href="https://docs.google.com/presentation/d/1iwWGAl1LoTUA3HET3j2Ky0QWxOWDH38U/edit?usp=sharing&ouid=112191670826392174088&rtpof=true&sd=true" data-aos="fade-up">Tutorial Slides &#128279;</Link>
                    <Link className="hover:underline" href="https://drive.google.com/file/d/18ScXfemprHj_HjEcPqCey5-IFL8kjIa7/view?usp=sharing" data-aos="fade-up">Oculus VR Introduction (.pdf) &#128279;</Link>
                    <Link className="hover:underline" href="https://drive.google.com/file/d/1ok1ajHQwaNcu5E5dJllR-uSav4OTLQWn/view?usp=drive_link" data-aos="fade-up">Student Quick Start (.mp4) &#128279;</Link>
                </div>
            </Article>
        </>
    )
}