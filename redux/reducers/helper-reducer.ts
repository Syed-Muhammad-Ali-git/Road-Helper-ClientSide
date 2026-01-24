import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Helper {
  phone: string;
  role: string;
  uid: string;
  fullName: string;
  email?: string;
  serviceType?: string;
  isOnline?: boolean;
  rating?: number;
  totalJobs?: number;
  isVerified?: boolean;
  createdAt?: string;
}

interface HelperState {
  helper: Helper | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: HelperState = {
  helper: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const helperSlice = createSlice({
  name: "helper",
  initialState,
  reducers: {
    setHelper: (state, action: PayloadAction<Helper | null>) => {
      state.helper = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
      state.error = null;
    },
    setHelperLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setHelperError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutHelper: (state) => {
      state.helper = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setHelper, setHelperLoading, setHelperError, logoutHelper } =
  helperSlice.actions;
export default helperSlice.reducer;
