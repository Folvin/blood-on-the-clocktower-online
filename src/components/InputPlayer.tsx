"use client";

import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {Button, buttonVariants} from "./ui/button";
import {Input} from "./ui/input";
import {useRef, useState} from "react";
import {addPlayer, resetPlayers} from "@/redux/features/setup-slice";
import {cn} from "@/lib/utils";

export function InputPlayer() {
  const dispatch = useAppDispatch();

  const [inputVal, setInputVal] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Input
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        type="text"
        placeholder="player name"
        onKeyDown={e => {
          if (e.key === "Enter") {
            buttonRef.current?.click();
            setInputVal("");
          }
        }}
      />
      <div className="flex gap-4">
        <button
          ref={buttonRef}
          className={cn(buttonVariants(), "flex-1")}
          onClick={() => {
            inputVal && dispatch(addPlayer(inputVal));
            setInputVal("");
          }}>
          Add
        </button>
        <Button className="flex-1">go to grimoire</Button>
        <Button
          className="flex-1"
          onClick={() => {
            dispatch(resetPlayers());
          }}>
          Reset
        </Button>
      </div>
    </>
  );
}
