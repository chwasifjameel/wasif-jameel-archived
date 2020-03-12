import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainSection from "../components/mainSection"
import AboutMe from "../components/aboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <AboutMe />
    {/* <h1 className="italic">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image name="wasif-jameel.JPG" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
