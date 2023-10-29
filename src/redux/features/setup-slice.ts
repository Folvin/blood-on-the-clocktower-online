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
    removePlayer(state, action: PayloadAction<number>) {
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
  },
});

let idCounter = 0;
function createID() {
  idCounter++;
  return idCounter;
}

type SetupInfo = {
  players: Player[];
  setupSheet: SetupSheet;
};

export type Player = {
  id: number;
  name: string;
};

export const {addPlayer, removePlayer, resetPlayers} = setupInfo.actions;
export default setupInfo.reducer;
