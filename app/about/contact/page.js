"use client"

import Article from "@/app/components/Article";
import PageHeader from "@/app/components/PageHeader";
import Profile from "@/app/components/Profile";
import { ExternalLink } from "@/app/components/WebLink";
import { useState } from "react";

import nomr_logo from "@/app/src/Images/NOMR_logo_large_black.png"

export default function Home() {
  return(
  <>
    <PageHeader title="Contact Us" subtitle="Our correspondents should respond in 1-3 business days" style={`text-center my-8`}/>
    <Article>
      <Profile image={nomr_logo}>
        <p className="text-3xl font-bold">Dave Aplin</p>
        <div>
          <p className="italic text-primary-400">Position</p>
          <p>Overseer</p>
          <p>Introductory Labs Manager</p>
        </div>
        <div>
          <p className="italic text-primary-400">Contact At</p>
          <p>(206) 543-7094</p>
          <ExternalLink href="mailto:daplin@uw.edu">daplin@uw.edu</ExternalLink>
        </div>
      </Profile>
    </Article>
  </>
  )
}