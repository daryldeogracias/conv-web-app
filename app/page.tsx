import React from "react";
import Landing from "./components/Landing";
import Benefits from "./components/Benefits";

export const dynamic = "force-static";

const Home = () => {
  return (
    <div className="h-full">
      <Landing />
      <Benefits />
    </div>
  );
};

export default Home;
