import {
  MoreHorizontal,
  Plus,
} from 'lucide-react'



import { users } from '../data/users'
import Avatar from '../components/Client/Avatar'
import StatusBadge from '../components/Client/StatusBadge'
import { Button } from '../../components/ui/button'


 function UsersPage({
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Users
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage team members
          </p>
        </div>

        <Button >
          <Plus className="mr-2 size-4" />
          Add user
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                {[
                  'User',
                  'Email',
                  'Role',
                  'Status',
                  'Joined',
                  '',
                ].map((header) => (
                  <th
                    key={header}
                    className="px-5 py-3 font-medium"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={user.initials} />

                      <span className="font-medium">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {user.email}
                  </td>

                  <td className="px-5 py-4 text-slate-600">
                    {user.role}
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge status={user.status} />
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {user.joined}
                  </td>

                  <td className="px-5 py-4">
                    <button className="rounded p-1.5 text-slate-400 hover:bg-slate-100">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default UsersPage