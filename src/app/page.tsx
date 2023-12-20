import { auth } from "@/auth";
import Profile from "@/components/Profile";
const Home = async () => {
  const session = await auth();

  return (
    <div>
      <Profile />
    </div>
  );
};
export default Home;
