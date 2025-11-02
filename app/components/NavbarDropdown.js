"use client"

import Link from "next/link";
import {useState, useEffect} from "react"

export default function NavbarDropdown( { name, href, items} ) {

    const [isHovered, setHover] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
    let timerId;
    if (!isHovered && visible) {
      timerId = setInterval(() => {
        setVisible(false);
      }, 200);
    } else if (isHovered && !visible) {
        setVisible(true);
    }

    return () => clearInterval(timerId);
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="relative md:hover:underline hover:bg-primary-50 h-full p-2 mx-1 rounded-md hover:text-secondary-900 duration-300">
        <Link className="text-nowrap" href={href}>{name}</Link>
        {visible && 
        <div className={`flex flex-col duration-300 space-y-2 absolute p-2 rounded-md ${isHovered ? `bg-primary-50` : `bg-transparent`} ${isHovered ? `text-secondary-900` : `text-transparent`} min-w-24 top-10 shadow-xl border border-secondary-700 right-0`}> 
            <div className="absolute left-0 right-0 -top-2 bottom-full bg-transparent"/>
            {items.map((item) => (
                <Link key={item.id} className={`hover:underline ${item.id == 1 ? `!mt-0` : ``} whitespace-nowrap`} href={item.href}>{item.name}</Link>
            ))}
        </div>}
    </div>
  )
}
