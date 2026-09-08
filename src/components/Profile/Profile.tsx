import { Button } from '../../../components/ui/button'
import Avatar from '../Client/Avatar'
import StatusBadge from '../Client/StatusBadge'



export default function Profile({
}) {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Profile
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <Avatar initials="JS" />

          <div className="flex-1">
            <h3 className="text-lg font-semibold">
              John Smith
            </h3>

            <p className="text-sm text-slate-500">
              john@acme.com
            </p>

            <StatusBadge status="Manager" />
          </div>

          <Button
            variant="outline"

          >
            Edit profile
          </Button>
        </div>

        <div className="mt-7 border-t border-slate-100 pt-6">
          <h3 className="font-semibold">
            Account information
          </h3>

          <div className="mt-4 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="text-xs text-slate-500">
                Display name
              </p>

              <p className="mt-1 text-sm font-medium">
                John Smith
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Email
              </p>

              <p className="mt-1 text-sm font-medium">
                john@acme.com
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Role
              </p>

              <p className="mt-1 text-sm font-medium">
                Manager
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold">Security</h3>

        <p className="mt-1 text-sm text-slate-500">
          Manage your password and active sessions.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline">
            Change password
          </Button>

          <Button
            variant="ghost"
            className="text-rose-600 hover:text-rose-700"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}