import {InputPlayer} from "@/components/InputPlayer";
import {PlayerList} from "@/components/PlayerList";

export default function () {
  return (
    <div className="flex flex-col items-center justify-stretch flex-1">
      <div className="text-center relative">
        <h1 className="text-5xl sm:text-6xl text-primary font-unlovable">Add Players</h1>
        <span className="text-sm text-muted-foreground opacity-60 relative bottom-2">
          you can change this later
        </span>
      </div>

      <div className="flex flex-col w-full max-w-xl p-2 xs:p-12 gap-4">
        <InputPlayer />
        <div className="lg:w-1/5 lg:fixed right-8 top-8 px-4 py-4 border border-muted-foreground bg-muted rounded-lg">
          <h3 className="text-lg mb-2">Player List</h3>
          <PlayerList />
        </div>
      </div>
    </div>
  );
}
