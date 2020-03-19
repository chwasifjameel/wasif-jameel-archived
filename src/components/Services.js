import React from "react"

import { FaUserTie, FaRunning, FaCode } from "react-icons/fa"

export default () => (
  <div className="container">
    <div className="row justify-content-center my-5 py-5">
      <div className="col-md-7 text-center text-uppercase">
        <span className="text-light-color py-3 h4">What i do</span>
        <h1 className="py-3">My services</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="p-3 py-4 d-block text-center">
          <div className="mb-3 icon-color">
            <a>
              <FaCode />
            </a>
          </div>
          <div className="">
            <h5 className="">Full Stack Development</h5>
            <h5 className="">Mobile App Development</h5>
            <h5 className="">Website Development</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className=" p-3 py-4 d-block text-center">
          <div className="mb-3 icon-color">
            <a>
              <FaRunning />
            </a>
          </div>
          <div className="">
            <h5 className="">IT Startup Consulting</h5>
            <h5 className="">Software Solution</h5>
            <h5 className="">Business Strategy Development</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-3 py-4 d-block text-center">
          <div className="mb-3 icon-color">
            <a>
              <FaUserTie />
            </a>
          </div>
          <div className="">
            <h5 className="">IT Training</h5>
            <h5 className="">Technical Courses</h5>
            <h5 className="">Business Development seminars</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)
