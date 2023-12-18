import { signInAction, signOutAction } from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";
import { Button } from "@nextui-org/react";
const Home = async () => {
  const session = await auth();

  return (
    <div>
      <form action={signInAction}>
        <Button type="submit"> Sign In</Button>
      </form>
      <form action={signOutAction}>
        <Button type="submit"> Sign Out</Button>
      </form>
      <Profile />
    </div>
  );
};
export default Home;
