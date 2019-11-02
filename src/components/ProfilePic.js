import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Jacolby_Profile.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid}/>}
  />
)
