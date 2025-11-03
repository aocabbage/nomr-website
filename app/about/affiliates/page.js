"use client"

import Article from "@/app/components/Article";
import PageHeader from "@/app/components/PageHeader";
import SectionHeader from "@/app/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";

import peg_logo from "@/app/src/Images/peg_logo.png"
import dop_logo from "@/app/src/Images/dop_logo.png"
import hcde_logo from "@/app/src/Images/hcde_logo.png"
import stf_logo from "@/app/src/Images/stf_logo.png"

export default function Home() {
  return(
  <>
    <PageHeader title="Affiliates" subtitle="Organizations associated with and organizations funding NOMR"/>
    <Article>
      <SectionHeader>Organizational Partners</SectionHeader>
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 text-center md:space-x-12">
        <div className="lg:!my-auto rounded-lg shadow-lg p-8 border border-secondary-600">
          <Image
            src={dop_logo}
            width={500}
            height={500}
            alt="PEG Logo"
            className="mb-4"
          />
          <Link href="https://phys.washington.edu/fields/physics-education" className="text-base sm:text-lg font-bold hover:underline text-link-500">UW Physics Education Group (PEG) &#128279;</Link>
        </div>
        <div className="lg:!my-auto rounded-lg shadow-lg p-8 border border-secondary-600">
          <Image
            src={peg_logo}
            width={500}
            height={500}
            alt="PEG Logo"
            className="mb-4"
          />
          <Link href="https://phys.washington.edu/" className="text-base sm:text-lg font-bold hover:underline text-link-500">Department of Physics Introductory Labs &#128279;</Link>
        </div>
        <div className="lg:!my-auto rounded-lg shadow-lg p-8 border border-secondary-600">
          <Image
            src={hcde_logo}
            width={500}
            height={500}
            alt="HCDE Logo"
            className="mb-4"
          />
          <Link href="https://www.hcde.washington.edu/" className="text-base sm:text-lg font-bold hover:underline text-link-500">Human Centered Design and Engineering &#128279;</Link>
        </div>
      </div>
      <SectionHeader style={`!my-8`}>Financial Supporters</SectionHeader>
      <div className="flex flex-col lg:flex-row text-center lg:space-x-12">
        <div className="my-auto rounded-lg shadow-lg p-8 border border-secondary-600">
          <Image
            src={stf_logo}
            width={500}
            height={500}
            alt="PEG Logo"
            className="mb-4"
          />
          <Link href="https://techfee.uw.edu/" className="text-lg font-bold hover:underline text-link-500">Student Technology Fee (STF) &#128279;</Link>
        </div>
        <div className="flex flex-col text-left space-y-4">
          <p className="text-left mt-12 lg:mt-0">The funding we received is being used to achieve the following goals:</p>
          <ol className="list-decimal ml-8 space-y-2">
            <li>To further develop and expand the successful deployment of the Novel Observations in Mixed Reality (NOMR) VR lab application currently used in the Introductory Physics Laboratories.</li>
            <li>To expand the current student NOMR VR lab software developer team, creating a student developer hub to accommodate up to 11 students across the campus.</li>
            <li>To expand the current accessibility and outreach program for VR technology within the campus and beyond. </li>
            <li>To ensure the continued reliable performance of the NOMR VR lab application during undergraduate laboratory sessions.</li>
          </ol>
          <p>Awarded Funding (2019) <Link className="text-link-500 hover:underline" href="https://techfee.uw.edu/proposal/2019-51/">here&#128279;</Link>.</p>
          <p>Awarded Funding (2022) <Link className="text-link-500 hover:underline" href="https://techfee.uw.edu/proposal/2022-17/">here&#128279;</Link>.</p>
        </div>
      </div>
    </Article>
  </>
  )
}