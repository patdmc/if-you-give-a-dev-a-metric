import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import JSONData from "../content/book-content"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageCarousel = () => {
  const [index, setIndex] = React.useState(0);
  const data = useStaticQuery(graphql`
    query {
      allFile(sort: {fields: name, order: ASC}, filter: {name: {glob: "metric*"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }  
  `);
  //Minus 1 for array offset from 0
  const length = data.allFile.edges.length - 1;
  
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);
  
  const { node } = data.allFile.edges[index];
  console.log(JSON.stringify(JSONData));
  const { text, note } = JSONData.pages[index];
  
  return (
    <div>
      <div>
        <h2>{text}</h2>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
        />
        <h3>{note}</h3>
      </div>
      <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  );
}

export default ImageCarousel
