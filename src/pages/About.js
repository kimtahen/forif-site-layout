import React from "react"
import Layout from "../components/layout"

export default function Studies({location}) {
  return (
    <Layout sideList={0} pathName={location.pathname}>
      <h1> This is About page!</h1>
    </Layout>
  )
}