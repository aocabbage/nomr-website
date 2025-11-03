import Image from "next/image";

export default function Profile({children, image}) {
  return(<div className="flex flex-col lg:flex-row text-sm sm:text-base lg:space-x-8 space-y-8 lg:space-y-0 my-12 p-8 border border-secondary-600 shadow-lg rounded-xl">
    <Image
    className="w-72 mx-auto lg:mx-0 shrink border border-secondary-600 shadow-lg rounded-full"
    src={image}
    width={500}
    height={500}
    alt="Profile picture."
    />
    <div className="mx-auto hyphens-auto text-center lg:text-left lg:!my-auto relative space-y-2">
        {children}
    </div>
</div>);
}