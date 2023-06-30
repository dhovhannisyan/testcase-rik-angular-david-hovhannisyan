export interface User {
    name: string;
    email: string;
    phone: string | number;
    is_admin: boolean;
    create_at: Date;
    update_at: Date;
    status: USER_STATUS;
    is_ecp?: boolean;
    is_selected?: boolean;
};

export enum USER_STATUS {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

