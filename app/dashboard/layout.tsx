import React from "react"
import SideNav from "../ui/dashboard/sidenav"


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex md:flex-row flex-col md:overflow-hidden h-screen">
        <div className="w-full  flex-none md:w-64">
            <SideNav/>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        </div>
        </div>
  )
}

export default Layout