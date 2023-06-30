import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FilterComponent } from '../filter/filter.component';
import { LayoutService } from 'src/app/services/layout.service';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent,
    UserListComponent,
    MatButtonModule,
  ],
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent {

  onChangeUserStatus: EventEmitter<'ACTIVE' | 'INACTIVE'> = new EventEmitter();

  filterToggle$ = this.layoutService.toggleFilter;

  constructor(private layoutService: LayoutService) {}

  onToggleFilter() {
    this.layoutService.onToggleFilter();
  }

  onBlockUsers() {
    this.onChangeUserStatus.emit('INACTIVE');
  }

  onUnblockUsers() {
    this.onChangeUserStatus.emit('ACTIVE');
  }

}
