import { UserStatus } from './user_status';
import { UserRoles } from './roles';

export interface User {
    id: number;
    username: string;
    fullname: string;
    email: string;
    status: UserStatus;
    role: UserRoles;
}
