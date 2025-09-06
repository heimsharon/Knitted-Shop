export interface UserData {
    _id: string | null;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user' | 'guest' | null;
    avatar?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserLogin {
    username: string | null;
    password: string | null;
    role: 'admin' | 'user' | 'guest' | null;
}
