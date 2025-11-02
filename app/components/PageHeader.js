"use client"

import Image from "next/image"
import {useState, useEffect} from "react"

import bubble_chamber from "../src/Images/bubble_chamber.png"

export default function PageHeader({ title, subtitle }) {
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

    return (
        <div className="relative w-full h-[60vh]">
            <Image
            alt="An image of the trails observed in bubble chambers."
            className={`absolute object-cover w-full h-full`}
            full="true"
            src={bubble_chamber}
            preload="true"
            loading="eager"
            style={{ objectPosition : `center ${scrollY / 3}px`}}
            />
            <div className="relative mx-[10vw] flex flex-col text-center top-[20vh] md:top-[25vh] z-1 space-y-4 text-primary-50">
                <p className="text-5xl md:text-7xl font-bold mx-auto">
                    {title}
                </p>
                <p className="italic">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}
