"use client";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const HomePage = () => {
  const { user: currentUser } = useCurrentUser();

  if (currentUser) {
    return <div> Hi, user </div>;
  }
  return <div>Homes</div>;
};

export default HomePage;
