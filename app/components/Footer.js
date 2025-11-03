import Image from 'next/image'
import { BasicLink, ExternalLink } from './WebLink';

import dop_logo from  '../src/Images/dop_logo.png'
import nomr_logo from  '../src/Images/NOMR_logo_large_black.png'

export default function Footer() {
    return (
      <footer className="border-t p-4 bg-primary-100 text-primary-900 border-primary-200">
        <div className='mx-[10vw] text-sm sm:text-base lg:mx-[25vw] my-4 space-y-4'>
          <div className='flex flex-row place-content-between'>
            <div className='flex flex-col  w-1/3'>
              <p className="font-bold text-secondary-700 mb-4" href="/">NOMR</p>
              <BasicLink href="/">Home</BasicLink>
              <BasicLink href="/about/contact">Contact Us</BasicLink>
              <ExternalLink href="https://github.com/Novel-Observations-in-Mixed-Reality/NOMR">Github</ExternalLink>
            </div>
            <div className='flex flex-col w-1/3'>
              <p className="font-bold text-secondary-700 mb-4" href="/">ABOUT</p>
              <BasicLink href="/faq">FAQ</BasicLink>
              <BasicLink href="/about">Mission Statement</BasicLink>
              <BasicLink href="/about/affiliates">Affiliates</BasicLink>
              <BasicLink href="/about/alum">Alumni</BasicLink>
            </div>
            <div className='flex flex-col w-1/3'>
              <p className="font-bold text-secondary-700 mb-4" href="/">STUDENTS</p>
              <BasicLink href="/join">Join</BasicLink>
              <BasicLink href="/about/lab">Lab Setup</BasicLink>
              <BasicLink href="/sim">Simulations</BasicLink>
            </div>
          </div>
          
        </div>
        <div className='place-content-center flex flex-col md:flex-row space-x-4'>
          <Image className='max-w-[50vw] !mx-auto md:!mx-0' width={400} height={200} alt="The logo for NOMR" src={dop_logo}></Image> 
          <Image className='max-w-[50vw] !mx-auto md:!mx-0' width={200} height={200} alt="The logo for NOMR" src={nomr_logo}></Image> 
        </div>
      </footer>
    );
  }