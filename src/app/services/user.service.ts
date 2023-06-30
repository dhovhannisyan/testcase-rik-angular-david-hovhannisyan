import { Injectable } from '@angular/core';
import { HttpCommonService } from './common-http.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private filterSubject: Subject<User> = new Subject();
  public filter$: Observable<User> = this.filterSubject.asObservable();

  constructor(private httpService: HttpCommonService) { }

  getAllUsers(): Observable<any> {
    return this.httpService.get('/api/rubetek/angular-testcase-list/ ');
  }

  filterApply(form: User) {
    this.filterSubject.next(form);
  }
  
}
