"use client";

import {useAppSelector} from "@/redux/hooks";
import Link from "next/link";

export default function Home() {
  const count = useAppSelector(s => s.counter.value);
  return (
    <div>
      <Link className="underline" href={"/reduxExample"}>
        redux example page
      </Link>
      <p>count: {count}</p>
    </div>
  );
}
