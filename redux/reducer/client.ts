import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface listClientProps {
  id: string;
  name: string;
  policy_number: string;
  start_coverage_period: string;
  end_coverage_period: string;
  total_claim: string;
}

export interface ClientProps {
  listClient: listClientProps[] | null;
}

const Client: ClientProps = {
  listClient: null,
};

export const clientSlice = createSlice({
  name: "client",
  initialState: Client,
  reducers: {
    handleAllUser: (state, action: PayloadAction<listClientProps[]>) => {
      state.listClient = action.payload;
    },
  },
});

export const { handleAllUser } = clientSlice.actions;

export default clientSlice.reducer;
