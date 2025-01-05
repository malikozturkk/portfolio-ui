import Image from "next/image"
import React from "react"

const Header = () => {
    return (
        <nav className="bg-[#21212e] py-3 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between mx-10 my-2">
                <Image src="/images/avatar.jpeg" alt="Malik Avatar" className="rounded-full" width={40} height={40} />
                <span className="-mx-[1px] text-2xl cursor-pointer text-[#793fff] px-[10px]"><b>malikozturkk</b></span>
            </div>
            <ul className="md:flex md:items-center md:z-auto static bg-[#21212e] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-[-400px] transition-all ease-in duration-500">
                <li className="mx-4 my-4 md:my-0">
                    <a href="#" className="text-white hover:text-[#793fff] duration-500">Home</a>
                </li>
                <li className="mx-4 my-4 md:my-0">
                    <a href="#about" className="text-white hover:text-[#793fff] duration-500">About</a>
                </li>
                <li className="mx-4 my-4 md:my-0">
                    <a href="#skills" className="text-white hover:text-[#793fff] duration-500">My Skills</a>
                </li>
                <li className="mx-4 my-4 md:my-0">
                    <a href="#experience" className="text-white hover:text-[#793fff] duration-500">Experience</a>
                </li>
                <li className="mx-4 my-4 md:my-0">
                    <a href="#projects" className="text-white hover:text-[#793fff] duration-500">Portfolio</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header