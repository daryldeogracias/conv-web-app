"use client";

import React from "react";
import Landing from "./components/Landing";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { useInView } from "react-intersection-observer";

export const dynamic = "force-static";

const Home = () => {
  const { ref: landingRef, inView: isLandingInView } = useInView({
    threshold: 0.3,
  });

  const { ref: footerRef, inView: isFooterInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="h-full">
      <div ref={landingRef}>
        <Landing />
      </div>
      <Benefits />
      <Testimonial />
      <div ref={footerRef}>
        <Footer />
      </div>
      {!isLandingInView && !isFooterInView && <Checkout />}
    </div>
  );
};

export default Home;
