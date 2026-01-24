import { AppDispatch } from "@/redux/store";
import {
  setCustomer,
  setCustomerLoading,
  setCustomerError,
  logoutCustomer,
  setConfirmationResult,
  setPhone,
} from "@/redux/reducers/customer-reducer";
import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setCookie, deleteCookie } from "cookies-next";

interface Customer {
  phone: string;
  role: string;
  uid: string;
  fullName: string;
}

export const sendOTPAction = (phone: string) => async (dispatch: AppDispatch) => {
  dispatch(setCustomerLoading(true));
  try {
    const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
    const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
    dispatch(setConfirmationResult(confirmationResult));
    dispatch(setPhone(phone));
    dispatch(setCustomerLoading(false));
  } catch (error: any) {
    dispatch(setCustomerError(error.message));
  }
};

export const customerLoginAction = (otp: string) => async (dispatch: AppDispatch, getState: any) => {
  dispatch(setCustomerLoading(true));
  try {
    const { customer } = getState().customer;
    if (!customer.confirmationResult) {
      throw new Error("No OTP sent");
    }
    const result = await customer.confirmationResult.confirm(otp);
    const user = result.user;

    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    let userData;
    if (userDoc.exists()) {
      userData = userDoc.data();
    } else {
      // Create new user
      userData = {
        uid: user.uid,
        phone: customer.phone,
        role: "client",
        fullName: "",
        createdAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "users", user.uid), userData);
    }

    dispatch(setCustomer(userData as Customer));
    setCookie("auth-token", user.accessToken);
  } catch (error: any) {
    dispatch(setCustomerError(error.message));
  }
};

export const logoutCustomerAction = () => async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutCustomer());
    deleteCookie("auth-token");
  } catch (error: any) {
    console.error("Logout error:", error);
  }
};
