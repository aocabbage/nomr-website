"use client"

import Article from "@/app/components/Article";
import PageHeader from "@/app/components/PageHeader";
import Image from "next/image";
import { useEffect, useState } from "react";

import nomr_logo from "@/app/src/Images/NOMR_logo_large_black.png"
import jared from "@/app/src/Images/jared.jpg"
import alexis from "@/app/src/Images/alexis.jpg"
import { ExternalLink} from "@/app/components/WebLink";
import Profile from "@/app/components/Profile";

export default function Home() {

    return(
    <>
        <PageHeader title="Alumni" subtitle="Past leaders in the NOMR program" style={`text-center my-8`}/>
        <Article>
            <Profile image={alexis}>
                <p className="text-3xl font-bold">Alexis Mendoza</p>
                <div>
                    <p className="italic text-primary-400">Formerly</p>
                    <p>Virtual Reality Development Supervisor</p>
                    <p>Scientific Instruction Technician II</p>
                </div>
                <div>
                    <p className="italic text-primary-400">Contact At</p>
                    <p>(562) 285-2182</p>
                    <ExternalLink href="mailto:alexis.mendoza.tech@gmail.com">alexis.mendoza.tech@gmail.com</ExternalLink>
                </div>
            </Profile>
            <Profile image={jared}>
                <p className="text-3xl font-bold">Jared Canright</p>
                <div>
                    <p className="italic text-primary-400">Formerly</p>
                    <p>Founder</p>
                </div>
                <div>
                    <p className="italic text-primary-400">Contact At</p>
                    <p>(206) 685-7421</p>
                    <ExternalLink href="mailto:jpcanright@gmail.com">jpcanright@gmail.com</ExternalLink>
                </div>
            </Profile>
        </Article>
    </>)
}