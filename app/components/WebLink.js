import Link from "next/link";

export default function InternalLink({ children, href, className }) { 
  return(
  <Link href={href} className={`hover:underline text-link-500 ${className}`}>{children} &#9658;</Link>
)}
export function ExternalLink({ children, href, className }) { 
  return(
  <Link href={href} className={`hover:underline text-link-500 ${className}`}>{children} &#128279;</Link>
)}
export function BasicLink({ children, href, className }) { 
  return(
  <Link href={href} className={`hover:underline text-link-500 ${className}`}>{children}</Link>
)}
