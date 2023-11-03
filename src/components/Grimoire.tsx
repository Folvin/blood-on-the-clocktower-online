"use client";

import {Player, setPlayerCharacter} from "@/redux/features/setup-slice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Image from "next/image";
import {SetupSheet} from "./SetupSheet";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Character} from "@/lib/classes/Character";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Drama, Settings, Wrench} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";

export function GrimoirePlayers() {
  return (
    <>
      <ul className="absolute w-full flex items-center justify-center h-full bottom-4">
        <SetupInfo />
        <PlayerLi />
      </ul>
      <div className="fixed top-2 right-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <Settings />
            </Button>
          </SheetTrigger>
          <SheetContent className="min-w-[320px]">
            <Tabs defaultValue="setup" className="mr-3">
              <TabsList className="flex">
                <TabsTrigger className="flex-1" value="setup">
                  <Wrench className="w-4 sm:w-auto" />
                </TabsTrigger>
                <TabsTrigger className="flex-1" value="characters">
                  <Drama className="w-4 sm:w-auto" />
                </TabsTrigger>
              </TabsList>
              <Separator className="my-3" />
              <TabsContent className="flex flex-col gap-3 items-stretch" value="setup">
                <Link className="w-full" href={"/"}>
                  <Button className="w-full">main menu</Button>
                </Link>
                <Link className="w-full" href={"/choose-edition"}>
                  <Button className="w-full">choose edition</Button>
                </Link>
                <Link className="w-full" href={"/choose-players"}>
                  <Button className="w-full">choose players</Button>
                </Link>
              </TabsContent>
              <TabsContent value="characters">WIP</TabsContent>
            </Tabs>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function PlayerToken({player}: {player: Player}) {
  const edition = useAppSelector(v => v.edition);
  const dispatch = useAppDispatch();
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="h-16 w-16 border border-foreground ring-2 ring-foreground/30 rounded-full relative">
            <div className="w-4/5 h-4/5 m-auto relative bottom-1">
              {player.character && (
                <Image width={150} height={150} alt="" src={player.character.imageURL} />
              )}
            </div>
            <div className="absolute top-[60%] w-full">
              <p className="m-auto w-min text-center text-xxs leading-2 tracking-tighter bg-accent/70 font-sans">
                {player.character?.name}
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Assign Role</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center h-[400px] overflow-y-auto">
            <h3 className="text-xl mb-2 text-blue-500">Townsfolks</h3>
            <ul className="grid grid-cols-autoxs w-full gap-2 border-l-2 border-blue-500">
              {edition.townsfolks.map(c => (
                <li className="flex justify-center">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="h-full p-0 hover:bg-inherit"
                      onClick={() => {
                        dispatch(setPlayerCharacter({id: player.id, character: c}));
                      }}>
                      <Token character={c} />
                    </Button>
                  </DialogClose>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />

            <h3 className="text-xl mb-2 text-cyan-400">Outsiders</h3>
            <ul className="grid grid-cols-autoxs w-full gap-2 border-l-2 border-cyan-400">
              {edition.outsiders.map(c => (
                <li className="flex justify-center">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="h-full p-0 hover:bg-inherit"
                      onClick={() => {
                        dispatch(setPlayerCharacter({id: player.id, character: c}));
                      }}>
                      <Token character={c} />
                    </Button>
                  </DialogClose>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />

            <h3 className="text-xl mb-2 text-orange-500">Minions</h3>
            <ul className="grid grid-cols-autoxs w-full gap-2 border-l-2 border-orange-500">
              {edition.minions.map(c => (
                <li className="flex justify-center">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="h-full p-0 hover:bg-inherit"
                      onClick={() => {
                        dispatch(setPlayerCharacter({id: player.id, character: c}));
                      }}>
                      <Token character={c} />
                    </Button>
                  </DialogClose>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />

            <h3 className="text-xl mb-2 text-red-600">Demons</h3>
            <ul className="grid grid-cols-autoxs w-full gap-2 border-l-2 border-red-600">
              {edition.demons.map(c => (
                <li className="flex justify-center">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="h-full p-0 hover:bg-inherit"
                      onClick={() => {
                        dispatch(setPlayerCharacter({id: player.id, character: c}));
                      }}>
                      <Token character={c} />
                    </Button>
                  </DialogClose>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />

            <h3 className="text-xl mb-2 text-violet-500">Travellers</h3>
            <ul className="grid grid-cols-autoxs w-full gap-2 border-l-2 border-violet-500">
              {edition.travellers.map(c => (
                <li className="flex justify-center">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="h-full p-0 hover:bg-inherit"
                      onClick={() => {
                        dispatch(setPlayerCharacter({id: player.id, character: c}));
                      }}>
                      <Token character={c} />
                    </Button>
                  </DialogClose>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
      <div className="w-full h-6 bg-muted rounded-sm flex justify-center items-center border border-muted-foreground relative bottom-4 z-30">
        <p className="text-xs tracking-tighter truncate font-sans">{player.name}</p>
      </div>
    </>
  );
}

function Token({character}: {character: Character}) {
  return (
    <div className="h-16 w-16 border border-foreground ring-2 ring-foreground/30 rounded-full relative">
      <div className="w-4/5 h-4/5 m-auto relative bottom-1">
        <Image width={150} height={150} alt="" src={character.imageURL} />
      </div>
      <div className="absolute top-[60%] w-full">
        <p className="m-auto w-min text-center text-xxs leading-2 tracking-tighter bg-accent/70 font-sans">
          {character.name}
        </p>
      </div>
    </div>
  );
}

function PlayerLi() {
  const setup = useAppSelector(v => v.setup);
  const playerCount = setup.players.length;
  const degSpacing = 360 / playerCount;

  return (
    <>
      {setup.players.map((p, i) => {
        const rotationValue = i * degSpacing + 90;

        return (
          <li
            className="h-0 absolute w-[93vmin]"
            style={{transform: `rotate(${rotationValue}deg) translateY(-32px)`}}>
            <div
              className="absolute h-16 w-16 text-center z-30"
              style={{transform: `rotate(-${rotationValue}deg)`}}>
              <PlayerToken player={p} />
            </div>
          </li>
        );
      })}
    </>
  );
}

function SetupInfo() {
  return (
    <li>
      <SetupSheet reduced />
    </li>
  );
}
