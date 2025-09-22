"use client"

import Link from "next/link"
import { navLinks } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";
import Button from "../ui/Button";
import { useState } from "react";

const Navbar = () => {
    const [openMoblieMenu,
        setOpenMobileMenu] =useState(false)

        const handleOpenMoblieMenu = () => {
            setOpenMobileMenu(!openMoblieMenu)
        }
  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
        <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
           <Link href={"/"}>
           <div className="flex items-center gap-1">
            <h1 className="text-black font-semibold uppercase text-xl">TalentCove</h1>

            <MdAdsClick
            className="text-blue-600 text-3xl" />
           </div>
           </Link>

           <ul className="flex gap-16 items-center max-md:hidden">
            {navLinks.map((link, index) => (<Link href={link.route} key={index}>
            <li>{link.name}</li>
            </Link>))}
        </ul>

        <div className="max-md: flex justify-center items-center gap-10">
            <Link href={"/create"}>
            <Button>Post a Job</Button>
            </Link>
            
        </div>
        </div>
    </nav>
  )
}

export default Navbar
