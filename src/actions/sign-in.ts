"use server";
import { signIn } from "@/auth";

export const signInAction = () => {
  return signIn("github");
};
