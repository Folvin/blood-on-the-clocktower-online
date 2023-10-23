import {configureStore} from "@reduxjs/toolkit";
import counterExampleReducer from "./features/example-slice";

export const store = configureStore({
  reducer: {
    /* listing all reducer from the slices NOT THE ACTIONS!!! */
    counter: counterExampleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch