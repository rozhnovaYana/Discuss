"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  console.log(session.data?.user);
  return <div></div>;
};
export default Profile;
