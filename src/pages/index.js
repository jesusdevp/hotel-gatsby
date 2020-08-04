import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitciones from "../hooks/useHabitaciones"

const IndexPage = () => {
  useHabitciones()
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
    </Layout>
  )
}

export default IndexPage
