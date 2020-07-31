import React from "react"
import Header from "../components/header"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
