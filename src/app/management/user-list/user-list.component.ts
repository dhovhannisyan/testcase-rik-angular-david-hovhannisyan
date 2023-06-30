import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { USER_STATUS, User } from 'src/app/models/user.model';
import { MOCK_USERS } from 'src/assets/data/mock-users';
import { Subject, takeUntil } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  @Input() onChangeUserStatus: EventEmitter<'ACTIVE' | 'INACTIVE'>;

  data = MOCK_USERS;
  filtredData;
  dataSource: MatTableDataSource<User>;

  displayedColumns: string[] = [
    'actions', 
    'name', 
    'email', 
    'phone', 
    'is_admin',
    'update_at',
    'create_at',
    'status',
    'is_ecp'
  ];

  private unsubscribeAll: Subject<void> = new Subject();


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
    this.subscribeToUserStatusChange();
    this.subscribeToFilterChange();
   
  }

  getSelectedUsers() {
    if (this.dataSource) {
      return this.dataSource.data.reduce((accumulator, user) => {
        return accumulator + (user.is_selected ? 1 : 0);
      }, 0);
    } else {
      return 0;
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
  }

  subscribeToUserStatusChange() {
    this.onChangeUserStatus.subscribe(status => {
      if (status === USER_STATUS.ACTIVE) {
        this.onUnblockUsers();
      } else {
        this.onBlockUsers();
      }      
    });
  }

  subscribeToFilterChange() {
    this.userService.filter$.pipe(takeUntil(this.unsubscribeAll)).subscribe(filter => {
      this.filtredData = this.data;
      
        Object.keys(filter).forEach(key => {

          if (filter[key] !== null) {
            switch (key) {
              
              case 'name': 
                this.filtredData = this.filtredData.filter(user => {
                    return user.name.startsWith(filter.name);
                });
                break;

              case 'email':
                this.filtredData = this.filtredData.filter(user => {
                    return user.email.startsWith(filter.email);
                });
                break;

              case 'phone':
                this.filtredData = this.filtredData.filter(user => {
                    return user.phone.toString().startsWith(filter.phone);
                });
                break;

              case 'is_admin':
                this.filtredData = this.filtredData.filter(user => {
                    return user.is_admin === filter.is_admin;
                });
                break;

              case 'update_at':
                this.filtredData = this.filtredData.filter(user => {                  
                    return moment(user.update_at).format('DD/MM/YYYY') === moment(filter.update_at).format('DD/MM/YYYY');
                });
                break;

              case 'create_at':
                this.filtredData = this.filtredData.filter(user => {
                    return moment(user.create_at).format('DD/MM/YYYY') === moment(filter.create_at).format('DD/MM/YYYY');
                });
                break;

              case 'status':
                this.filtredData = this.filtredData.filter(user => {
                    return user.status === filter.status;
                });
                break;

              default:
                break;
            }
          }
        });
        this.dataSource = new MatTableDataSource<User>(this.filtredData);
      });
  }

  selectUnselectAll(select: boolean) {  
    this.dataSource.data.forEach(user => {
      user.is_selected = select ? true : false;
    });
  }

  onBlockUsers() {    
    this.filtredData.forEach(user => {
      if(user.is_selected) {        
        user.status = USER_STATUS.INACTIVE;
      }
    });      
    this.dataSource = new MatTableDataSource<User>(this.filtredData);
  }

  onUnblockUsers() {
    this.filtredData.forEach(user => {
      if(user.is_selected) {
        user.status = USER_STATUS.ACTIVE;
      }
    });
    this.dataSource = new MatTableDataSource<User>(this.filtredData);
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.setData(users);
    });
  }

  setData(response) {
    this.data = response.users.map(user => {
      const data = response.data.find(data => data.user_id === user.id);
      const usr = {...user, ...data};
      const {user_id, ...u} = usr;
      u.is_selected = false;
      return u;
    });
    this.filtredData = this.data;
    this.dataSource = new MatTableDataSource(this.filtredData);
    this.dataSource.paginator = this.paginator;
  }

}

