import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Domain from "./components/Domain";
import Milestone from "./components/Milestone";
import Feature from "./components/Feature";
import Documents from "./components/Documents";
import Tools from "./components/Tools";
import OurTeam from "./components/OurTeam";

export default function Page() {
  return (
    <div className="h-full">
      <Header />
      <Home />
      <Introduction />
      <Domain />
      <Milestone />
      <Feature />
      <Documents />
      <Tools />
      <OurTeam/>
    </div>
  );
}
