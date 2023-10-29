import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex flex-col gap-8">
        <div className="flex items-center text-primary font-unlovable">
          <Image
            className="hidden sm:block"
            width={150}
            height={150}
            src={"/images/main-img.png"}
            alt="imp icon"
          />
          <h1 className="hidden xs:block text-3xl lg:text-5xl mt-5 sm:mt-0">Blood On The Clocktower Online</h1>
          <h1 className="text-3xl mt-5 block xs:hidden">BOTC online</h1>
        </div>

        <div className="flex flex-col gap-10">
          <Link href={"/choose-edition"}>
            <Button className="w-full text-lg h-12 transition-all hover:ring-4 ring-secondary">New grimoire</Button>
          </Link>

          {/* future features */}
          <Link href={"/"}>
            <Button className="w-full text-lg h-12 hover:ring-4 ring-secondary">Load grimoire</Button>
          </Link>
          <Link href={"/"}>
            <Button className="w-full text-lg h-12 hover:ring-4 ring-secondary">Load JSON grimoire</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
