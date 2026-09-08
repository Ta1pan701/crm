import type { ITeamUser } from "../types/staff";

export const users: ITeamUser[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@acme.com',
    role: 'Admin',
    status: 'Active',
    joined: 'Jan 12, 2024',
    initials: 'JS',
  },
  {
    id: 2,
    name: 'Emily Davis',
    email: 'emily@acme.com',
    role: 'Manager',
    status: 'Active',
    joined: 'Feb 24, 2024',
    initials: 'ED',
  },
  {
    id: 3,
    name: 'Chris Lee',
    email: 'chris@acme.com',
    role: 'Manager',
    status: 'Inactive',
    joined: 'Mar 08, 2024',
    initials: 'CL',
  },
]