import { USER_STATUS, User } from "src/app/models/user.model";
import * as moment from 'moment';

export const MOCK_USERS: User[] = [
    { 
      name: 'hello', 
      email: 'asidorov@vtb.ru', 
      phone: '+7(916) 888-88-88', 
      is_admin: true, 
      update_at: moment().subtract(1, 'days').toDate(),
      create_at: new Date(),
      status: USER_STATUS.ACTIVE,
      is_ecp: true,
      is_selected: false
    },
    { 
      name: 'Hydrogen', 
      email: 'asidorov@vtb.ru', 
      phone: '+7(916) 888-88-88', 
      is_admin: false, 
      update_at: new Date(),
      create_at: new Date(),
      status: USER_STATUS.INACTIVE,
      is_ecp: false,
      is_selected: false
    },
    { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: true, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.ACTIVE,
        is_ecp: true,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: false, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.INACTIVE,
        is_ecp: false,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: true, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.ACTIVE,
        is_ecp: true,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: false, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.INACTIVE,
        is_ecp: false,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: true, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.ACTIVE,
        is_ecp: true,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: false, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.INACTIVE,
        is_ecp: false,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: true, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.ACTIVE,
        is_ecp: true,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: false, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.INACTIVE,
        is_ecp: false,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: true, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.ACTIVE,
        is_ecp: true,
        is_selected: false
      },
      { 
        name: 'Hydrogen', 
        email: 'asidorov@vtb.ru', 
        phone: '+7(916) 888-88-88', 
        is_admin: false, 
        update_at: new Date(),
        create_at: new Date(),
        status: USER_STATUS.INACTIVE,
        is_ecp: false,
        is_selected: false
      }
  ];
  