import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Kathy I. Andersen | Student of human systems & software systems</h2>
    <blockquote>"The goal of an individual or an organization should not be defined in absolute terms. A good definition of a goal is one that sets us on a path of ongoing improvement. Pursuing such a goal necessitates more than one breakthrough.
    </blockquote>
    <blockquote> In fact it requires many."
    </blockquote> <blockquote>
       — Eli Goldratt</blockquote>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">About Me & Contact</Link>
  </Layout>
)

export default IndexPage
