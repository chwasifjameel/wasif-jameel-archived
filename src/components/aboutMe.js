import React from "react"
import Image from "./image"
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa"
import { Parallax } from "react-scroll-parallax"

export default () => (
  <div className="row justify-content-around ">
    <div className="col-xs-12 col-sm-4 justify-content-center ">
      <Parallax className="mb-5" y={[25, -25]} tagOuter="figure">
        <div style={{ width: "70%" }}>
          <Image src="wasif-jameel-me.jpg" />
        </div>
      </Parallax>
    </div>
    <div className="col-xs-10 col-sm-4 m-3">
      <h1 className="text-light-color">Hi! I'm Wasif Jameel</h1>
      <h6 className="text-justify">
        Industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries. <br />
        But also the leap into electronic typesetting , remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting , remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset
      </h6>
      <ul class="footer-social list-unstyled mt-4">
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
            <span class="icon-instagram"></span>
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
)
