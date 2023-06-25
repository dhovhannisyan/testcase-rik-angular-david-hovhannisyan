import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from './servises/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  isSidenavOpen = true;
  unsubscribeAll: Subject<void> = new Subject();

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.toggleSidenav.pipe(takeUntil(this.unsubscribeAll)).subscribe(isOpen => {
      this.isSidenavOpen = isOpen;
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
  }


}
