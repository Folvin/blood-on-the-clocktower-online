import {Edition} from "@/lib/classes/Edition";
import {copy} from "@/lib/utils";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: Edition = copy(new Edition({roles: []}));

export const selectedEdition = createSlice({
  name: "selectedEdition",
  initialState: initialState,
  reducers: {
    setEdition(state, action: PayloadAction<EditionToParse>) {
      const instance = new Edition(action.payload);
      return copy(instance);
    },
  },
});

export type EditionToParse = {
  meta?: {
    author: string;
    name: string;
    image: string;
  };
  roles: string[];
};

export const {setEdition} = selectedEdition.actions;
export default selectedEdition.reducer;
