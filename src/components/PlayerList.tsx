"use client";
import {removePlayer} from "@/redux/features/setup-slice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";

export function PlayerList() {
  const setupInfo = useAppSelector(v => v.setup);
  const dispatch = useAppDispatch();

  return (
    <>
      {setupInfo.players.length ? (
        <ul className="max-h-36 lg:max-h-96 pr-2 list-decimal list-inside overflow-y-auto grid grid-cols-2 lg:grid-cols-1">
          {setupInfo.players.map((p, i) => {
            return (
              <li
                key={p.id}
                className="cursor-pointer py-1 truncate"
                onClick={() => dispatch(removePlayer(p.id))}>
                {p.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground opacity-70">add players!</p>
      )}
    </>
  );
}
