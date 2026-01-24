import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  phone: string;
  role: string;
  uid: string;
  fullName: string;
}

interface CustomerState {
  customer: Customer | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  confirmationResult: any;
  phone: string;
}

const initialState: CustomerState = {
  customer: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  confirmationResult: null,
  phone: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<Customer | null>) => {
      state.customer = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
      state.error = null;
    },
    setCustomerLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCustomerError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutCustomer: (state) => {
      state.customer = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setConfirmationResult: (state, action: PayloadAction<any>) => {
      state.confirmationResult = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const {
  setCustomer,
  setCustomerLoading,
  setCustomerError,
  logoutCustomer,
  setConfirmationResult,
  setPhone,
} = customerSlice.actions;
export default customerSlice.reducer;
