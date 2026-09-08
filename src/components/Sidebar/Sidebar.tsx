import {
  Building2,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  ShieldCheck,
  UserRound,
  Users,
  X,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'
import Avatar from '../Client/Avatar'


interface SidebarProps {
  mobileNav: boolean
  setMobileNav: (value: boolean) => void
}

export default function Sidebar({
  mobileNav,
  setMobileNav,
}: SidebarProps) {
  const workspace = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'Clients',
      path: '/clients',
      icon: Users,
    },
  ]

  return (
    <>
      {/* Overlay для мобильного меню */}
      {mobileNav && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/20 lg:hidden"
          onClick={() => setMobileNav(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white px-4 py-5 transition-transform lg:translate-x-0 ${
          mobileNav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Building2 className="size-4" />
            </span>

            <span className="text-lg font-semibold tracking-tight">
              Northstar
            </span>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileNav(false)}
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Workspace */}
        <div className="mt-10 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </div>

        <nav className="mt-3 space-y-1">
          {workspace.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMobileNav(false)}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              <Icon className="size-[18px]" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Administration */}
        <div className="mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Administration
        </div>

        <nav className="mt-3">
          <NavLink
            to="/users"
            onClick={() => setMobileNav(false)}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            <ShieldCheck className="size-[18px]" />
            Users
          </NavLink>
        </nav>

        {/* Account */}
        <div className="mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Account
        </div>

        <nav className="mt-3">
          <NavLink
            to="/profile"
            onClick={() => setMobileNav(false)}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            <UserRound className="size-[18px]" />
            Profile
          </NavLink>
        </nav>

        {/* User */}
        <div className="mt-auto border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <Avatar
              initials="JS"
              small
            />

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                John Smith
              </p>

              <p className="text-xs text-slate-500">
                Manager
              </p>
            </div>

            <button
              className="ml-auto text-slate-400 hover:text-slate-700"
              aria-label="More user options"
            >
              <MoreHorizontal className="size-4" />
            </button>
          </div>

          <button className="mt-2 flex w-full items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900">
            <LogOut className="size-4" />
            Log out
          </button>
        </div>
      </aside>
    </>
  )
}