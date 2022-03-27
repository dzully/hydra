import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthenticationProps {
  primaryCurrency: string;
  primaryField: string;
  secondaryCurrency: string;
  secondaryField: string;
}

const Authentication: AuthenticationProps = {
  primaryCurrency: "NEP",
  primaryField: "",
  secondaryCurrency: "BUSD",
  secondaryField: "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: Authentication,
  reducers: {
    handlePrimaryCurrency: (state, action: PayloadAction<string>) => {
      state.primaryCurrency = action.payload;
    },
    handleSecondaryCurrency: (state, action: PayloadAction<string>) => {
      state.secondaryCurrency = action.payload;
    },
  },
});

export const { handlePrimaryCurrency, handleSecondaryCurrency } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
