"use client";

import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {Button} from "./ui/button";
import {increaseByAmount, increment} from "@/redux/features/example-slice";
import {Input} from "./ui/input";
import {ArrowLeft, Plus} from "lucide-react";
import {useState} from "react";
import Link from "next/link";

export function ReduxExample() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [increaseValue, setIncreaseValue] = useState("");

  return (
    <div className="flex justify-center flex-col items-center h-screen text-center">
      <div className="flex flex-col gap-5 w-52">
        <h3 className="text-xl font-bold">count: {count}</h3>
        <Button onClick={() => dispatch(increment())}>
          <Plus size={22} /> <span className="text-lg">1</span>
        </Button>
        <div className="flex w-full items-center space-x-2">
          <Input
            value={increaseValue}
            onChange={e => setIncreaseValue(e.target.value)}
            type="number"
            placeholder="Add by amount"
          />
          <Button onClick={() => dispatch(increaseByAmount(+(increaseValue ?? 0)))}>
            <Plus size={22} />
          </Button>
        </div>
        <Link href={"/"} className="relative">
          <Button className="w-full underline absolute left-0">
            go back! <ArrowLeft className="absolute right-2" size={22} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
