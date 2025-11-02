import Link from "next/link";

export default function NavbarItem( { name, href } ) {
  return (
    <Link href={href}>
    <li href={href} className="whitespace-nowrap md:hover:underline cursor-pointer hover:bg-primary-50 h-full p-2 mx-1 rounded-md hover:text-secondary-900 duration-300">
      {name}
    </li>
    </Link>
  )
}
