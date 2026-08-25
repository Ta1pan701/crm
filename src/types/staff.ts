type UserRole = 'Admin' | 'Manager'
interface ITeamUser {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    status: 'Active' | 'Inactive';
    joined: string;
    initials: string
}