import React from "react"
import './index.css'
import Layout from "../components/layout"

export default function Home({location}) {
  return (
    <Layout pathName={location.pathname}>
      <h1>This is your Forif Home!</h1>
    </Layout>
  )
}
