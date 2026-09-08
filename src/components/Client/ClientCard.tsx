import { MoreHorizontal } from "lucide-react";
import StatusBadge from "./StatusBadge";
import Avatar from "./Avatar";
import type { IClient } from "../../types/client";

export default function ClientTable({
    clients,
    compact = false,
}: {
    clients: IClient[];
    compact?: boolean;
}) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-180 text-left text-sm">
                <thead className="bg-slate-50 text-xs text-slate-500">
                    <tr>
                        {[
                            "Client",
                            "Company",
                            "Email",
                            "Phone",
                            "Status",
                            "Created",
                            "",
                        ].map((h) => (
                            <th
                                key={h}
                                className="px-5 py-3 font-medium"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                    {clients.map((client) => (
                        <tr
                            key={client.id}
                            className="hover:bg-slate-50/70"
                        >
                            <td className="px-5 py-3.5">
                                <div className="flex items-center gap-3">
                                    <Avatar initials={client.initials} />

                                    <div>
                                        <p className="font-medium text-slate-800">
                                            {client.name}
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            {client.email}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-5 py-3.5 text-slate-600">
                                {client.company}
                            </td>

                            <td className="px-5 py-3.5 text-slate-500">
                                {client.email}
                            </td>

                            <td className="px-5 py-3.5 text-slate-500">
                                {client.phone}
                            </td>

                            <td className="px-5 py-3.5">
                                <StatusBadge status={client.status} />
                            </td>

                            <td className="px-5 py-3.5 text-slate-500">
                                {client.created}
                            </td>

                            <td className="px-5 py-3.5">
                                <button
                                    className="rounded p-1.5 text-slate-400 hover:bg-slate-100"
                                    aria-label={`Actions for ${client.name}`}
                                >
                                    <MoreHorizontal className="size-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}