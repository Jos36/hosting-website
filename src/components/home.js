import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Nav from "./nav";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="home" id="home">
      <Nav />
      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="welcome">
            <ParallaxLayer offset={0} speed={0.2}>
              <div className="overlay"></div>
              <img className="cover" src="/cover.jpg" alt="" />
            </ParallaxLayer>

            <div className="text">
              <h1 className="heading">Fast and secure web hosting</h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                et
              </h2>
              <h2>
                nesciunt dolore neque illum eum quo corrupti facere. At nulla
                eius temporibus rem.
              </h2>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.6} speed={0.4}>
          <Footer />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={0.5} speed={0.6}>
          <img
            src="trs.svg"
            alt=""
            style={{ width: "30%", marginLeft: "10%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} factor={0.5} speed={0.7}>
          <img
            src="trs.svg"
            alt=""
            style={{ width: "35%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} factor={0.5} speed={0.9}>
          <img
            src="trs.svg"
            alt=""
            style={{ width: "5%", marginLeft: "60%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={0.5} speed={0.2}>
          <img src="trs.svg" alt="" style={{ width: "40%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} factor={0.5} speed={1}>
          <img
            src="trs.svg"
            alt=""
            style={{ width: "20%", marginLeft: "30%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} factor={0.5} speed={0.9}>
          <img
            src="cloud.svg"
            alt=""
            style={{ width: "40%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} factor={0.5} speed={0.8}>
          <img
            src="cloud2.svg"
            alt=""
            style={{ width: "20%", marginLeft: "50%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4}>
          <div className="section">
            <img className="left" src="/first.svg" alt="" />
            <div className="text-wrapper ">
              <h1 className="bottom-text heading">Secured servers</h1>
              <h2 className="bottom-text">
                nesciunt dolore neque illum eum quo corrupti facere.
              </h2>
              <h3 className="bottom-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.4}>
          <div className="section wrap-rev">
            <div className="text-wrapper ">
              <h1 className="bottom-text heading">Monitor your servers</h1>
              <h2 className="bottom-text">
                nesciunt dolore neque illum eum quo corrupti facere.
              </h2>
              <h3 className="bottom-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
            <img src="/second.svg" alt="" className="right" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.4}>
          <div className="section">
            <img src="/third.svg" alt="" className="left" />
            <div className="text-wrapper ">
              <h1 className="bottom-text heading">Start with only one click</h1>
              <h2 className="bottom-text">
                nesciunt dolore neque illum eum quo corrupti facere.
              </h2>
              <h3 className="bottom-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={0.4}>
          <div className="section wrap-rev">
            <div className="text-wrapper ">
              <h1 className="bottom-text heading">Contact us</h1>

              <a href="#">
                <h2 className="bottom-text heading">superhost@gmail.com</h2>
              </a>
              <h2 className="bottom-text heading">817-818-8743</h2>
              <h2 className="bottom-text">612-791-8721</h2>
            </div>
            <img src="/forth.svg" alt="" className="right" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
