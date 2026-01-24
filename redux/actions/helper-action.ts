import { AppDispatch } from "@/redux/store";
import {
  setHelper,
  setHelperLoading,
  setHelperError,
  logoutHelper,
  Helper,
} from "@/redux/reducers/helper-reducer";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setCookie, deleteCookie } from "cookies-next";

export const helperLoginAction = (credentials: { email: string; password: string }) => async (dispatch: AppDispatch) => {
  dispatch(setHelperLoading(true));
  try {
    const { email, password } = credentials;
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // Get user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      throw new Error("User data not found");
    }
    const userData = userDoc.data();

    dispatch(setHelper(userData as Helper));
    setCookie("auth-token", await user.getIdToken());
  } catch (error: any) {
    dispatch(setHelperError(error.message));
  }
};

export const helperRegisterAction = (data: { fullName: string; email: string; password: string; phone: string; serviceType: string }) => async (dispatch: AppDispatch) => {
  dispatch(setHelperLoading(true));
  try {
    const { fullName, email, password, phone, serviceType } = data;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // Create user data in Firestore
    const userData = {
      uid: user.uid,
      fullName,
      email,
      phone,
      role: "helper",
      serviceType,
      isOnline: false,
      rating: 0,
      totalJobs: 0,
      isVerified: false,
      createdAt: new Date().toISOString(),
    };
    await setDoc(doc(db, "users", user.uid), userData);

    dispatch(setHelper(userData as Helper));
    setCookie("auth-token", await user.getIdToken());
  } catch (error: any) {
    dispatch(setHelperError(error.message));
  }
};

export const logoutHelperAction = () => async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutHelper());
    deleteCookie("auth-token");
  } catch (error: any) {
    console.error("Logout error:", error);
  }
};
