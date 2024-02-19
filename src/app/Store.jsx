import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/counter/CounterSlice";
import PostSlice from "./features/posts/PostSlice";


const store = configureStore({
  reducer: {
    counter: CounterSlice,
    posts: PostSlice
  }
})
export default store