import { PayloadAction, createSlice, Slice } from "@reduxjs/toolkit";
import { ShowcaseState } from "../../types";

export const showcaseSlice: Slice<ShowcaseState> = createSlice({
  name: "Showcase",
  initialState: { showCase: "" },
  reducers: {
    updateShowcase: (state, action: PayloadAction<string>) => {
      return { ...state, showCase: action.payload };
    },
  },
});
export const { updateShowcase } = showcaseSlice.actions;
export default showcaseSlice.reducer;
