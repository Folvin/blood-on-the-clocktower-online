"use client";

import Image from "next/image";
import {Button} from "./ui/button";
import {useAppDispatch} from "@/redux/hooks";
import {setEdition} from "@/redux/features/edition-slice";
import {EditionName, getExistingEditionByName} from "@/lib/constant/editions";

export function SelectEdition({edition}: {edition: EditionName}) {
  const dispatch = useAppDispatch();

  return (
    <Button
      className="h-full p-1 w-full"
      variant={"outline"}
      onClick={() => {
        /* to implement, edition setted based on the edition props passed */
        dispatch(setEdition(getExistingEditionByName(edition)));
      }}>
      <Image
        className="h-full w-full"
        width={434}
        height={434}
        src={`/images/Logo_${edition.toLowerCase().replaceAll(/\s/g, "_")}.png`}
        alt={edition}
      />
    </Button>
  );
}
