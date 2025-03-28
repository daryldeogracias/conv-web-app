import React from "react";
import Landing from "./components/Landing";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";

export const dynamic = "force-static";

const Home = () => {
  return (
    <div className="h-full">
      <Landing />
      <Benefits />
      <Testimonial />
    </div>
  );
};

export default Home;
