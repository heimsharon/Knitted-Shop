export interface UserLogin {
    username: string | null;
    password: string | null;
    role: 'superadmin' | 'admin' |'moderator' | 'user' | 'guest' | null;
}

export interface UserData {
    _id: string | null;
    username: string;
    email: string;
    password: string;
    role: 'superadmin' | 'admin' |'moderator' | 'user' | 'guest' | null;
    lastLogin: Date;
    notifications:[];
    avatar?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
    

}

export interface AdminData extends UserData {
    adminId: string | number ;
    assignedRoles: string;
    activityLog: [];
    isActive: boolean;
    onEditProfile:
        status: {
        totalUsers: number;
        bannedUsers: number;
        onUserUnban: string;
    }
}
//Inherits both UserData and AdminData
export interface SuperAdminData extends AdminData {
    permissions: string[];
    managedUsers:
}