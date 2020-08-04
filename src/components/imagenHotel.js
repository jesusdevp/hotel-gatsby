import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 750px;
`

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "1.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  // console.log(image.sharp.fluid)
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>El mejor lugar para ti y tu familia</p>
      </TextoImagen>
    </ImageBackground>
  )
}
export default ImagenHotel
