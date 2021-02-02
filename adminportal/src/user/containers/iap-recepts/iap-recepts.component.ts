import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {UserIAPReceipt} from '../../models/UserIAPReceipt';

@Component({
  selector: 'app-iap-recepts',
  templateUrl: './iap-recepts.component.html',
  styleUrls: ['./iap-recepts.component.css']
})
export class IapReceptsComponent implements OnInit {
  IAPreceipts$: Observable<UserIAPReceipt[] | []>;
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.IAPreceipts$ = this.store.pipe(select(fromStore.getIAPReceipts));
  }

}
