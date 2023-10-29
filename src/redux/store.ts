import {configureStore} from "@reduxjs/toolkit";
import editionReducer from "./features/edition-slice";
import setupReducer from "./features/setup-slice";

export const store = configureStore({
  reducer: {
    /* listing all reducer from the slices NOT THE ACTIONS!!! */
    edition: editionReducer,
    setup: setupReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
