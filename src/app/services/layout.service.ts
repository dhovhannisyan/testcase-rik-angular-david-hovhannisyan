import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isSidenavOpen = false;
  private toggleSidenavSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.isSidenavOpen);
  public toggleSidenav: Observable<boolean> = this.toggleSidenavSubject.asObservable();

  private isFilterOpen = true;
  private toggleFilterSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.isFilterOpen);
  public toggleFilter: Observable<boolean> = this.toggleFilterSubject.asObservable();

  constructor() { }

  onToggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.toggleSidenavSubject.next(this.isSidenavOpen);
  }

  onCloseSidenav() {
    this.isSidenavOpen = false;
    this.toggleSidenavSubject.next(this.isSidenavOpen);
  }

  onToggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
    this.toggleFilterSubject.next(this.isFilterOpen);
  }

  onCloseFilper() {
    this.isFilterOpen = false;
    this.toggleFilterSubject.next(this.isFilterOpen);
  }

}
