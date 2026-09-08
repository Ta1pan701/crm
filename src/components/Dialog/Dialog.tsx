'use client'

import { X } from 'lucide-react'
import { Button } from '../../../components/ui/button'


interface DialogProps {
  kind: 'client' | 'user' | 'profile'
  onClose: () => void
}

export default function Dialog({
  kind,
  onClose,
}: DialogProps) {
  const title =
    kind === 'client'
      ? 'Add client'
      : kind === 'user'
        ? 'Add user'
        : 'Edit profile'

  const fields =
    kind === 'user'
      ? ['Full name', 'Email', 'Role', 'Status']
      : ['Name', 'Email', 'Phone', 'Company', 'Status']

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/30 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update the details below. Changes are for preview
              only.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <label
              key={field}
              className="grid gap-1.5 text-sm font-medium text-slate-700"
            >
              {field}

              {field === 'Status' ? (
                <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal outline-none focus:border-slate-400">
                  <option>New</option>
                  <option>In Progress</option>
                  <option>Won</option>
                  <option>Lost</option>
                </select>
              ) : (
                <input
                  placeholder={`Enter ${field.toLowerCase()}`}
                  className="h-10 rounded-lg border border-slate-200 px-3 font-normal outline-none focus:border-slate-400"
                />
              )}
            </label>
          ))}
        </div>

        <div className="mt-7 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button onClick={onClose}>
            {kind === 'profile'
              ? 'Save changes'
              : kind === 'user'
                ? 'Create user'
                : 'Create client'}
          </Button>
        </div>
      </div>
    </div>
  )
}