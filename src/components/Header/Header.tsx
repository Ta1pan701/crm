import {
  Bell,
  ChevronDown,
  Menu,
} from 'lucide-react'

import { useLocation } from 'react-router-dom'
import Avatar from '../Client/Avatar'


interface HeaderProps {
  setMobileNav: (value: boolean) => void
}

export default function Header({
  setMobileNav,
}: HeaderProps) {
  const location = useLocation()

  const titles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/clients': 'Clients',
    '/users': 'Users',
    '/profile': 'Profile',
  }

  const descriptions: Record<string, string> = {
    '/dashboard': 'Overview of your CRM activity',
    '/clients': 'Manage and track your clients',
    '/users': 'Manage team members',
    '/profile': 'Manage your account',
  }

  const title =
    titles[location.pathname] ?? 'Dashboard'

  const description =
    descriptions[location.pathname] ?? ''

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur md:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile menu */}
        <button
          className="lg:hidden"
          onClick={() => setMobileNav(true)}
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </button>

        <div>
          <h1 className="text-base font-semibold">
            {title}
          </h1>

          <p className="hidden text-xs text-slate-500 sm:block">
            {description}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell className="size-[18px]" />

          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-blue-600" />
        </button>

        {/* Divider */}
        <div className="hidden h-6 w-px bg-slate-200 sm:block" />

        {/* User */}
        <button className="flex items-center gap-2">
          <Avatar
            initials="JS"
            small
          />

          <ChevronDown className="hidden size-4 text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  )
}