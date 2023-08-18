import React from "react";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";

function Home() {
    return (
      <div className="Home">
        <Banner />
        <About />
        <Events />
        <Contact />
        
      </div>
    );
  }
export default Home;