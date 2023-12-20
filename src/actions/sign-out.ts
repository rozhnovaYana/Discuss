"use server";
import { signOut } from "@/auth";

export const signOutAction = () => {
  return signOut();
};
