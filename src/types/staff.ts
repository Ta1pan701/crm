type UserRole = 'Admin' | 'Manager'
export interface ITeamUser {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    status: 'Active' | 'Inactive';
    joined: string;
    initials: string
}