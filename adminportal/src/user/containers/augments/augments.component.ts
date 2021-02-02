import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {UserAugment} from '../../models/UserAugment';

@Component({
  selector: 'app-augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.css']
})
export class AugmentsComponent implements OnInit {
  userAugments$: Observable<UserAugment[] | []>
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.userAugments$ = this.store.pipe(select(fromStore.getUserAugments));
  }

  onUnequipAugment(): void {
    // do something
  }

  onRemoveAugment(): void {
    // do something
  }

}
