import React from "react"
import Image from "./image"
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa"
import { Parallax } from "react-scroll-parallax"

export default () => (
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-xs-12 col-sm-4">
        <Parallax className="mb-5" y={[50, -50]} tagOuter="figure">
          <div>
            <Image src="wasif-jameel-me.jpg" />
          </div>
        </Parallax>
      </div>
      <div className="col-xs-10 col-sm-6 m-3">
        <h1 className="text-light-color">Hi! I'm Wasif Jameel</h1>
        <h6 className="">
          I'm a Tech Savvy. I have working experience in numerous industries and
          environments. I do web development, mobile app development, and
          desktop application development. Anything you could name! I keep a
          close eye on emerging technologies.
          <br />I have also worked closely with many international startups in
          my capacity as a consultant, developer, and architect. I'm currently
          serving <a href="https://ciphersavvy.com">Cipher Savvy</a> as CEO.
        </h6>
        <ul className="footer-social list-unstyled mt-4">
          <li>
            <a
              href="https://twitter.com/chwasifjameel"
              className="d-flex justify-content-center align-items-center font-weight-bold"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/chwasifjameel1"
              className="d-flex justify-content-center align-items-center font-weight-bold"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/chwasifjameel"
              className="d-flex justify-content-center align-items-center font-weight-bold"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
        <h4>Contact Me Here</h4>
        <h5 className="py-3">
          <span className="text-light-color">Email:</span>
          <a href="mailto:wasif.jameel1@gmail.com"> wasif.jameel1@gmail.com</a>
        </h5>
      </div>
    </div>
  </div>
)
