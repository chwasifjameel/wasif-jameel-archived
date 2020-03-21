import React from "react"
import Image from "./image"
import { Parallax } from "react-scroll-parallax"

const temp = [
  {
    heading: "Development",
    title: "My Passion for coding is endless, I Enjoy Talking to Machines.",
    description: `Industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it`,
    picture: "wasif-jameel-react-javascript.png",
  },
  {
    heading: "Consulting",
    title:
      "When you change the way you look at things, the things you look at change.",
    description: `Industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it`,
    picture: "dummy-image.png",
  },
  {
    heading: "Traning",
    title: "I belive learning and teaching never exausts anyone.",
    description: `Industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it`,
    picture: "dummy-image.png",
  },
]

export default () => (
  <div className="container my-5 py-5 ">
    {temp.map(({ heading, title, description, picture }, index) => (
      <div
        className={
          index % 2 === 0
            ? "row justify-content-between "
            : "row justify-content-between flex-row-reverse"
        }
      >
        <div className="col-md-4 col-xs-12">
          <Parallax className="mb-5" y={[50, -50]} tagOuter="figure">
            <div>
              <Image src={picture} />
            </div>
          </Parallax>
        </div>
        <div className="col-md-6 w-100 mt-5">
          <p className="text-light-color">{heading}</p>
          <h2 className="text-capatilize py-3">{title}</h2>
          <p className="text-light-color">{description}</p>
        </div>
      </div>
    ))}
  </div>
)
