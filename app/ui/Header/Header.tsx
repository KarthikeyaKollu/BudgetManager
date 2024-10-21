"use client"
import React from 'react'
import avatar from '../../public/Avataaar.svg'
import logo from '../../public/logo.svg'
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Header = () => {
  return (
    <div>
       <div className="w-full py-4 sticky top-0 z-10 bg-white">
              <div className="flex items-center justify-between">
                <Image src={logo} alt="Logo" />
                <UserButton afterSignOutUrl='/'  />
              </div>
             
            </div>
    </div>
  )
}

export default Header