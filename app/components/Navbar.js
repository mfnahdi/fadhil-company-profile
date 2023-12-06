import Link from "next/link";
import React from "react";
import { images } from "@/next.config";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="">
      <div className="nav">
        <Image src="/kfclogo.png" width={200} height={100} alt="" />

        <Link href="/">Home</Link>

        <Link href="/company">Services</Link>

        <Link href="/teams">Teams</Link>

        <Link href="/about">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
