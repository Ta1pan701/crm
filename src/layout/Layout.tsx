import { Outlet } from "react-router-dom"

function Layout() {
    return(
        <div className="max-w-7xl w-full mx-auto">

        {/* <Sidebar></Sidebar> */}
        <main>
            <Outlet></Outlet>
        </main>
        </div>
    )
}
export default Layout