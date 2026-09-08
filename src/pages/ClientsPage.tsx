import { ChevronLeft, ChevronRight, Plus, Search, SlidersHorizontal } from "lucide-react";
import ClientTable from "../components/Client/ClientCard";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import type { IClient } from "../types/client";

function ClientsPage({
}) {
    const [query, setQuery] = useState('')
    const [dialog, setDialog] = useState(false)
    const clients: IClient[] = []
    return (
        <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Clients
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage and track your clients
                    </p>
                </div>

                    <Plus className="mr-2 size-4" />
                    Add client
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />

                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search clients..."
                        className="h-9 w-full rounded-lg border-0 bg-slate-50 pl-9 pr-3 text-sm outline-none ring-1 ring-slate-200 focus:ring-slate-400"
                    />
                </div>

                <select className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600">
                    <option>All statuses</option>
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Won</option>
                </select>

                    <SlidersHorizontal className="mr-2 size-4" />
                    Filters
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <ClientTable clients={clients} />

                <div className="flex items-center justify-between border-t border-slate-100 p-4 text-xs text-slate-500">
                    <span>
                        Showing {clients.length} of 128 clients
                    </span>

                    <div className="flex gap-1">
                        <button className="rounded border border-slate-200 p-1.5">
                            <ChevronLeft className="size-4" />
                        </button>

                        <button className="rounded border border-slate-900 bg-slate-900 p-1.5 text-white">
                            1
                        </button>

                        <button className="rounded border border-slate-200 px-2.5 py-1.5">
                            2
                        </button>

                        <button className="rounded border border-slate-200 px-2.5 py-1.5">
                            3
                        </button>

                        <button className="rounded border border-slate-200 p-1.5">
                            <ChevronRight className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClientsPage