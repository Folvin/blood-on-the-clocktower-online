import {SelectEdition} from "@/components/SelectEdition";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col items-center flex-1 justify-around">
      <div className="text-center relative">
        <h1 className="text-center text-5xl sm:text-6xl text-primary font-unlovable">
          Choose Edition
        </h1>
        <span className="text-center text-muted-foreground opacity-60 text-sm relative bottom-2">
          you can change this later
        </span>
      </div>
      <div className="grid grid-cols-2 max-w-[350px] lg:grid-cols-4 gap-10 place-items-center lg:max-w-[1200px] px-8">
        <div className="h-full w-full">
          <Link href={"/choose-players"}>
            <SelectEdition edition="Trouble Brewing" />
          </Link>
        </div>
        <div className="h-full w-full">
          <Link href={"/choose-players"}>
            <SelectEdition edition="Bad Moon Rising" />
          </Link>
        </div>
        <div className="h-full w-full">
          <Link href={"/choose-players"}>
            <SelectEdition edition="Sects and Violets" />
          </Link>
        </div>
        <div className="h-full w-full">
          <Link href={"/choose-players"}>
            <SelectEdition edition="Laissez un Faire" />
          </Link>
        </div>
      </div>

      {/* to implement, load custom script from json with a dialog */}
      <Button variant={"link"} size={"lg"} className="text-lg">
        load custom script
      </Button>
    </div>
  );
}
