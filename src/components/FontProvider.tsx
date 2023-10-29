"use client";
import {Dispatch, PropsWithChildren, SetStateAction, useState} from "react";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function FontProvider({children}: PropsWithChildren) {
  const [font, setFont] = useState("font-medieval");

  return (
    <div className={font}>
      <FontToggle font={font} setFont={setFont} />
      {children}
    </div>
  );
}

function FontToggle({font, setFont}: {font: string; setFont: Dispatch<SetStateAction<string>>}) {
  return (
    <div className="fixed bottom-14 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button autoFocus variant="outline" size="icon">
            <p className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-center">
              <span>{font === "font-medieval" ? "Me" : "Sa"}</span>
            </p>
            <span className="sr-only">Toggle font</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setFont("font-medieval")}>
            font medieval
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setFont("font-sans")}>font sans</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
