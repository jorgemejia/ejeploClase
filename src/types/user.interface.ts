export interface UserSystem {
    id: number;
    name: string;
    lastnameFather: string;
    lastnameMother: string;
    email: string;
    password: string;
    rememberToken: string;
    idCampus: any;
    idDepartment: any;
    idRole: any;
    isActive: boolean;
    img: string | null,
    canAccessAnecdoticos: number;
    createdAt?: Date | null;
}