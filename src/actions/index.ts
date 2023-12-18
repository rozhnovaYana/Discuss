"use server";
import { signIn, signOut } from "@/auth";
export const signInAction = () => {
  return signIn("github");
};
export const signOutAction = () => {
  return signOut();
};
