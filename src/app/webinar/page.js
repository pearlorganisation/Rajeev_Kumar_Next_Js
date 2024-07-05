import AboutWebinar from "@/_components/Webinar/AboutWebinar";
import HeroSection from "@/_components/Webinar/HeroSection";
import WhatYour from "@/_components/Webinar/WhatYour";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutWebinar />
      <WhatYour />
    </div>
  );
};

export default page;
