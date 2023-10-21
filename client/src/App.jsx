import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navnar";
import "./App.css";
import Hero from "./components/hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero/>
        <Features/>
        <div className="services">
          <div className="service-top"> 
          <h2>Our Special dishes</h2>
          <p>Indulge in Culinary Delights: A Selection of Exquisite and Unique Creations from Our Special Dishes Menu</p>
          </div>
         
          <div className="cards-grid">
            <div className="card">
              <div className="top">
              <i class="ri-heart-line first"></i>
              <p><i class="ri-star-fill"></i>4.5</p>
              
              <img src="https://img.freepik.com/free-photo/spaghetti-with-vegetablesbroccolitomatoespeppers-isolated-white-background_123827-21345.jpg?w=1060&t=st=1697872448~exp=1697873048~hmac=788117a39633c065e25c8327d51f6b231f5500ca6071b54fec77192435b4dc2e" alt="" />
              </div>
              <div className="bottom">
                <h5>Oyester Spaghetti</h5>
                <div className="button-container">
                <p>$5.5</p>
                <button>Add to Cart </button>
                </div>
                
              </div>
            </div>
            <div className="card">
            <div className="top">
              <i class="ri-heart-line first"></i>
              <p><i class="ri-star-fill"></i>4.5</p>
              
              <img src="https://img.freepik.com/free-photo/spaghetti-with-vegetablesbroccolitomatoespeppers-isolated-white-background_123827-21345.jpg?w=1060&t=st=1697872448~exp=1697873048~hmac=788117a39633c065e25c8327d51f6b231f5500ca6071b54fec77192435b4dc2e" alt="" />
              </div>
              <div className="bottom">
                <h5>Oyester Spaghetti</h5>
                <div className="button-container">
                <p>$5.5</p>
                <button>Add to Cart </button>
                </div>
                
              </div>
            </div>
            <div className="card">
 <div className="top">
              <i class="ri-heart-line first"></i>
              <p><i class="ri-star-fill"></i>4.5</p>
              
              <img src="https://img.freepik.com/free-photo/spaghetti-with-vegetablesbroccolitomatoespeppers-isolated-white-background_123827-21345.jpg?w=1060&t=st=1697872448~exp=1697873048~hmac=788117a39633c065e25c8327d51f6b231f5500ca6071b54fec77192435b4dc2e" alt="" />
              </div>
              <div className="bottom">
                <h5>Oyester Spaghetti</h5>
                <div className="button-container">
                <p>$5.5</p>
                <button>Add to Cart </button>
                </div>
                
              </div>  
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
