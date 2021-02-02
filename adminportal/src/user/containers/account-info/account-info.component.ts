import { Component, OnInit } from '@angular/core';
import {UserAppProfile} from '../../models/UserAppProfile';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  userProfile$: Observable<UserAppProfile | {}>;
  constructor( private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.userProfile$ = this.store.pipe(select(fromStore.getUserProfile));
  }

}
