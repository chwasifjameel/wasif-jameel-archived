import React from "react"
import Particles from "react-particles-js"
import Encrypt from "../components/encryptEffect"
export default () => (
  <>
    <Particles
      className="particles-js"
      params={{
        particles: {
          number: {
            value: 90,
            density: { enable: false, value_area: 1815 },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 2, color: "#000000" },
            polygon: { nb_sides: 6 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 0,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 481.0236182596568,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="d-block text-center text-uppercase">
        <h3 className="text-light-color">Hello! I'm</h3>
        <h1 className="text-title">
          <Encrypt values={["Wasif Jameel"]} />
        </h1>
      </div>
    </div>
  </>
)
