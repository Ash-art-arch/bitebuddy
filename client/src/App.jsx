import { useState } from "react";
import Navbar from "./components/Navnar";
import "./App.css";
import Hero from "./components/hero";
import Features from "./components/Features";
import Services from "./components/services";
import Menu from "./components/menu";
import Review from "./components/Reviews";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero/>
        <Features/>
        <Services/>
        <Menu/>
        <Review/>
        <div className="subscription">
            <div className="sub-container">
                <div className="background"></div>
                <div className="text-container">
                <h1>Join our Membership and Get Free delivery</h1>
                <form>
                <input type="email" placeholder="Enter your email" />
                <button>Sign In</button>
                </form>
                
                </div>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
