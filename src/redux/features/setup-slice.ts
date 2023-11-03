import {Character} from "@/lib/classes/Character";
import {SetupSheet} from "@/lib/classes/SetupSheet";
import {copy} from "@/lib/utils";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: SetupInfo = {
  players: [],
  setupSheet: copy(new SetupSheet(0)),
};

export const setupInfo = createSlice({
  name: "setupInfo",
  initialState: initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<string>) {
      state.players.push({id: createID(), name: action.payload});
      const setupSheet = new SetupSheet(state.players.length);
      state.setupSheet = copy(setupSheet);
    },
    removePlayer(state, action: PayloadAction<string>) {
      state.players.splice(
        state.players.findIndex(v => v.id === action.payload),
        1
      );
      const setupSheet = new SetupSheet(state.players.length);
      state.setupSheet = copy(setupSheet);
    },
    resetPlayers(state) {
      return initialState;
    },
    setPlayerCharacter(state, action: PayloadAction<{id: string; character: Character}>) {
      const player = state.players.find(p => p.id === action.payload.id);
      if (!player) {
        return;
      } else {
        player.character = action.payload.character
      }
    },
  },
});

function createID() {
  const randomNumber = Math.floor(Math.random() * 1000);
  const dateNow = Date.now();
  return `${randomNumber}-${dateNow}`;
}

type SetupInfo = {
  players: Player[];
  setupSheet: SetupSheet;
};

export type Player = {
  id: string;
  name: string;
  character?: Character;
};

export const {addPlayer, removePlayer, resetPlayers, setPlayerCharacter} = setupInfo.actions;
export default setupInfo.reducer;
