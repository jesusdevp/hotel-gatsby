import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 93vh;
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
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "info" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0]
  return (
    <ImageBackground tag="section" fluid={imagen.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>{titulo}</h1>
        <p>{contenido}</p>
      </TextoImagen>
    </ImageBackground>
  )
}
export default ImagenHotel
