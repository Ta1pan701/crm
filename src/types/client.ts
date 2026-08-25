export type ClientStatus = 'New' | 'In Progress' | 'Won' | 'Lost'
export interface IClient {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    status: ClientStatus;
    created: string;
    initials: string
}