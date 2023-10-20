import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navnar";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="home">
          <div className="col-1">
            <h3>Be The Fastest in delivering Your food!</h3>
            <p>Delicious Delights, Delivered Directly to Your Doorstep!</p>
            <div className="input">
              <input type="text" placeholder="Enter your Destination" />
              <i class="ri-gps-line"></i>
            </div>
            <div className="home-button">
              <button className="active">Delivery</button>
              or
              <button>Pickup</button>
            </div>
          </div>
          <div className="col-2">
            <img
              src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1697734141~exp=1697734741~hmac=27e84f06314aac1928a5a78052ba5229a8cf2f71138791a4628a51d7b8ea3352"
              alt=""
            />
          </div>
        </div>
        <div className="features-grid">
          <div className="grid">
          <i class="ri-smartphone-line"></i>
            <h4>Easy to order</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officia!</p>
          </div>
          <div className="grid">
          <i class="ri-truck-line"></i>
            <h4>fastest delivery</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, est!.</p>
          </div>
          <div className="grid">
          <i class="ri-verified-badge-line"></i>
            <h4>best quality</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, autem?!</p>
          </div>

          <img src="../photo.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
