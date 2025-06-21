import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Link } from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <<Link href="/">
        <Image src={"/logo.png"} alt="spendo logo" width={200} height={60} className="h-12 w-auto object-contain" />
        </Link>>
      
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </nav>
    </div>
  )
}

export default Header;