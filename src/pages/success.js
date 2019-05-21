import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const SuccessPage = () => {
  return (
    <Layout>
      <Head
        title="Success"
        description="Thank you for your interest in our services. We will be in contact with you shortly."
      />
      <div style={{ marginTop: "5rem", textAlign: "center", height: "300px" }}>
        <h1>Thank you for your submission!</h1>
        <h3>You will be hearing from us shortly</h3>
      </div>
    </Layout>
  )
}

export default SuccessPage
