import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me & Contact" />
    <h2>About Me & Contact</h2>
    <p>Kathy serves as a Scrum Master at Hudl. There, she has the honor of working with talented teams and individuals supporting the business side of the Hudl's efforts to market, sell, support, and report on the company's products and services.
    (Hudl provides video review and performance analysis tools for coaches and athletes to review game footage and improve team play.)
    Kathy took an uncommon route to the software world, from running a nonprofit to seeing how startups fit into the landscape of economic development to grasping the magic of product development.
    Since then, she has worked on a host of different software projects and engineering teams. On one of her early projects, she ramped up on scrum and agile and fell in love with the idea that there really are ways to do work well.
    Today you'll find her speaking at conferences and participating in the agile & product development communities.
        </p>
    <p>Looking for a professional facilitator to help you get out of a meeting rut? Wondering what all the hype is about with project or Sprint Retrospectives? Curious to try a Working Agreement with your team?  Whether you need to do a Sprint 0, post-mortem, or strategic planning session, there are numerous benefits to having an impartial, experienced facilitator. Email me with a bit about your needs and I will work with you to help with preparation and/or facilitation. For groups large and small I am your ScrumMaster partner ready to set you (and your team) up for success.</p>
    <Link to="/">kathyia Home</Link>
  </Layout>
)

export default SecondPage
