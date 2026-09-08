import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

export default function Layout() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <Sidebar
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
      />

      <main className="lg:pl-64">
        <Header
          setMobileNav={setMobileNav}
        />

        <div className="mx-auto max-w-[1440px] p-5 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}