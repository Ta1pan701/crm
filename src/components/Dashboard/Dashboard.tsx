import {
  Clock3,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'

import StatCard from '../Client/StatCard'
import ClientTable from '../Client/ClientCard'
import { Button } from '../../../components/ui/button'

const clients:any =[]

interface DashboardProps {
  onAdd: () => void
}

 function Dashboard({
}) {
  return (
    <div className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-slate-500">
            Monday, June 17, 2024
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            Good morning, John
          </h2>
        </div>

        <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>All time</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Clients"
          value="128"
          detail="+12% from last month"
          icon={Users}
          tone="bg-blue-50 text-blue-600"
        />

        <StatCard
          title="New Clients"
          value="24"
          detail="+8% from last month"
          icon={TrendingUp}
          tone="bg-indigo-50 text-indigo-600"
        />

        <StatCard
          title="In Progress"
          value="42"
          detail="+6% from last month"
          icon={Clock3}
          tone="bg-amber-50 text-amber-600"
        />

        <StatCard
          title="Won"
          value="52"
          detail="+14% from last month"
          icon={ShieldCheck}
          tone="bg-emerald-50 text-emerald-600"
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                New Clients
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Client acquisition over time
              </p>
            </div>

            <button className="text-slate-400">
              <MoreHorizontal className="size-5" />
            </button>
          </div>

          <div className="mt-6 h-52">
            <div className="flex h-full items-end gap-2 border-b border-l border-slate-100 px-3 pt-4">
              {[35, 48, 42, 62, 54, 76, 68, 88, 72, 96, 84, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-sm bg-slate-200 transition group-hover:bg-slate-900"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ),
              )}
            </div>

            <div className="flex justify-between pl-4 pt-2 text-[10px] text-slate-400">
              <span>May 20</span>
              <span>May 27</span>
              <span>Jun 03</span>
              <span>Jun 10</span>
              <span>Jun 17</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">
            Clients by Status
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Current pipeline breakdown
          </p>

          <div className="mt-7 flex items-center gap-6">
            <div
              className="relative flex size-36 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  'conic-gradient(#10b981 0 41%, #f59e0b 41% 74%, #3b82f6 74% 89%, #f43f5e 89% 100%)',
              }}
            >
              <div className="flex size-24 items-center justify-center rounded-full bg-white">
                <div className="text-center">
                  <p className="text-2xl font-semibold">
                    128
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Total
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                ['Won', '52', 'bg-emerald-500'],
                ['In Progress', '42', 'bg-amber-500'],
                ['New', '24', 'bg-blue-500'],
                ['Lost', '10', 'bg-rose-500'],
              ].map(([label, value, dot]) => (
                <div
                  key={label}
                  className="flex items-center gap-2"
                >
                  <span
                    className={`size-2 rounded-full ${dot}`}
                  />

                  <span className="w-20 text-slate-500">
                    {label}
                  </span>

                  <b>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <div>
            <h3 className="font-semibold">
              Recent Clients
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Your most recently added clients
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
          >
            <Plus className="mr-2 size-4" />
            Add client
          </Button>

        </div>

        <ClientTable
          clients={clients.slice(0, 4)}
          compact
        />
      </div>
    </div>
  )
}
export default Dashboard