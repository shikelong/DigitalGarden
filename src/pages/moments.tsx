import React from "react"
import AppLayout from "../layouts/AppLayout"

type momentsProps = {}

const moments = (props: momentsProps): JSX.Element => {
  return (
    <AppLayout>
      <AppLayout.Header></AppLayout.Header>
      <AppLayout.Sidebar />
      <AppLayout.Content>Moments</AppLayout.Content>
      <AppLayout.Footer></AppLayout.Footer>
    </AppLayout>
  )
}

export default moments
