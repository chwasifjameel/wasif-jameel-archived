import React from "react"
import Image from "./image"
import { Parallax } from "react-scroll-parallax"
export default () => (
  <div className="container my-5 py-5">
    <div className="row justify-content-between">
      <div className="col-md-4 col-xs-12">
        <Parallax className="mb-5" y={[50, -50]} tagOuter="figure">
          <div>
            <Image src="wasif-jameel-react-code.jpeg" />
          </div>
        </Parallax>
      </div>
      <div className="col-md-6 w-100 mt-5">
        <p className="text-light-color">Development</p>
        <h2 className="text-capatilize py-3">
          My Passion for coding is endless, I Enjoy Talking to Machines.
        </h2>
        <p className="text-light-color">
          Industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it
        </p>
      </div>
    </div>
  </div>
)
