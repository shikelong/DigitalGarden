import * as React from "react"
import { Link } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import OceanShowCase from "../components/OceanShowCase"
import { AppHeader } from "../layouts/AppHeader"
import { HomeIcon } from "@heroicons/react/outline"
import Button from "../components/Button"
import boatUrl from "../assets/images/boat.svg"

const NotFoundPage = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <OceanShowCase size="full">
          <div className="h-full">
            <AppHeader />
            <div className="p-20 flex flex-col h-3/4 items-center justify-around">
              <h2 className="text-4xl font-serif">404 Not Found</h2>
              <img src={boatUrl} className="w-96"></img>
              <Button
                type="light"
                icon={<HomeIcon className="w-4 h-4"></HomeIcon>}
              >
                <Link to="/">Go home</Link>
              </Button>
            </div>
          </div>
        </OceanShowCase>
      </AppLayout.Header>
    </AppLayout>
  )
}

export default NotFoundPage
