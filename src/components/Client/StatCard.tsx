import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  detail: string
  icon: LucideIcon
  tone: string
}

export default function StatCard({
  title,
  value,
  detail,
  icon: Icon,
  tone,
}: StatCardProps) {
  const [first, second, ...rest] = detail.split(' ')

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            {value}
          </p>
        </div>

        <span
          className={`flex size-10 items-center justify-center rounded-lg ${tone}`}
        >
          <Icon className="size-5" />
        </span>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        <span className="font-semibold text-emerald-600">
          {first} {second}
        </span>{' '}
        {rest.join(' ')}
      </p>
    </div>
  )
}