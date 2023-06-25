import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isSidenavOpen = false;
  private toggleSidenavSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.isSidenavOpen);
  public toggleSidenav: Observable<boolean> = this.toggleSidenavSubject.asObservable();

  constructor() { }

  onToggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.toggleSidenavSubject.next(this.isSidenavOpen);
  }

}
