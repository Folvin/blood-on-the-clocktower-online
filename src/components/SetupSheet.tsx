"use client";

import {useAppSelector} from "@/redux/hooks";
import {Users2} from "lucide-react";

export function SetupSheet({reduced}: {reduced?: boolean}) {
  const setupInfo = useAppSelector(v => v.setup);

  if (!reduced) {
    return (
      <div className="space-y-2">
        <div className="flex">
          <Users2 className="text-blue-700 mr-1" />
          <p>{setupInfo.setupSheet.townsfolks} townsfolks</p>
        </div>
        <div className="flex">
          <Users2 className="text-cyan-400 mr-1" />{" "}
          <p>{setupInfo.setupSheet.outsiders} outsiders</p>
        </div>
        <div className="flex">
          <Users2 className="text-orange-500 mr-1" /> <p>{setupInfo.setupSheet.minions} minions</p>
        </div>
        <div className="flex">
          <Users2 className="text-red-600 mr-1" /> <p>{setupInfo.setupSheet.demons} demons</p>
        </div>
        <div className="flex">
          <Users2 className="text-violet-500 mr-1" />{" "}
          <p>{setupInfo.setupSheet.travellers} traveller</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex sm:gap-1 text-xs text-center">
        <div className="block sm:flex">
          <Users2 size={24} className="w-5 sm:w-auto text-blue-700 mr-1 relative" />
          <p className="-ml-1">{setupInfo.setupSheet.townsfolks}</p>
        </div>
        <div className="block sm:flex">
          <Users2 size={24} className="w-5 sm:w-auto text-cyan-400 mr-1" />
          <p className="-ml-1">{setupInfo.setupSheet.outsiders}</p>
        </div>
        <div className="block sm:flex">
          <Users2 size={24} className="w-5 sm:w-auto text-orange-500 mr-1" />
          <p className="-ml-1">{setupInfo.setupSheet.minions}</p>
        </div>
        <div className="block sm:flex">
          <Users2 size={24} className="w-5 sm:w-auto text-red-600 mr-1" />
          <p className="-ml-1">{setupInfo.setupSheet.demons}</p>
        </div>
        <div className="block sm:flex">
          <Users2 size={24} className="w-5 sm:w-auto text-violet-500 mr-1" />
          <p className="-ml-1">{setupInfo.setupSheet.travellers}</p>
        </div>
      </div>
    );
  }
}
