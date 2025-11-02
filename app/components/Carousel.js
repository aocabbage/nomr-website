"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Carousel({ items, start_index }) {

  const [carouselIndex, setIndex] = useState((start_index > 0 && start_index < items.length) ? start_index : 0);

    return(
    <>
      {items && <div className="static justify-center flex flex-row mx-auto">
        {items.length > 1 && <button onClick={e => {setIndex((carouselIndex + items.length - 1) % items.length)}} className=" h-24 my-auto text-6xl bg-secondary-50 border border-secondary-500 shadow-lg hover:bg-secondary-600 hover:text-primary-50 rounded-md p-4 duration-300 z-10">&lt;</button>}
        {items.map(item => (
          <div key={item.id} className={`text-center shrink duration-300 flex flex-col ${(carouselIndex == item.id) ? `opacity-100 relative`: `opacity-25 absolute`}`} style={{ transform : `translateX(${(item.id - carouselIndex) * 1000}px)` }}>
          { item.type == "photo" && 
          <Image
            className="mx-auto max-w-[80vw] border border-secondary-600 shadow-lg"
            src={item.href}
            height={500}
            placeholder="blur"
            alt={item.alt}
          />}
          { item.type == "video" && 
          <iframe 
            className={`mx-auto border border-secondary-600 max-w-[80vw] shadow-lg`}
            style={{maxHeight : `${80 * 9 / 16}vw`}}
            src={item.href} 
            height={500} 
            width={500 * 16 / 9}
            alt={item.alt}
          />}
          <p className="p-2 text-primary-600 italic">{`${item.alt}`}</p>
        </div>
        ))}
        <div className="h-[70vh]"></div>
          {items.length > 1 && <button onClick={e => {setIndex((carouselIndex + 1) % items.length)}}  className="h-24 text-6xl bg-secondary-50 border my-auto border-secondary-500 shadow-lg hover:bg-secondary-600 rounded-md hover:text-primary-50 px-4 duration-300 z-10">&gt;</button> }
      </div>}
    </>)
}
  
