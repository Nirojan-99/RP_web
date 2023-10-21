import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Domain from "./components/Domain";
import Milestone from "./components/Milestone";
import Feature from "./components/Feature";

export default function Page() {
  return (
    <div className="h-full">
      <Header />
      <Home />
      <Introduction />
      <Domain />
      <Milestone />
      <Feature />
    </div>
  );
}
