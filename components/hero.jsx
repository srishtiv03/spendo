"use client";

import Image from "next/image";
import { Button } from "./ui/button";
// filepath: c:\Users\Srishti\PROJECTS\spendo\components\hero.jsx

import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-7xl lg:text-[85px] pb-6 bg-gradient-to-r from-emerald-700 to-emerald-500 text-transparent bg-clip-text font-inter font-semibold">
                    Your Money. Your Plan. <br /> Backed by Intelligence.
                </h1>
                <p className="text-xl text-yellow-700 mb-8 max-w-2xl mx-auto">
                AI meets money management — get real-time insights to track, 
                analyze, and optimize every spend.
                </p>

                <div>
                    <Link href = "/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image
                        src="/banner.png"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                        />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default HeroSection