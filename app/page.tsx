import React from 'react'
import Wrapper from './Wrapper'
import { SignedIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const page = () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");
  return (
    <div>
      <Wrapper />
    </div>
  )
}

export default page
