import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {UserOfferReceipt} from '../../models/UserOfferReceipt';

@Component({
  selector: 'app-offer-receipts',
  templateUrl: './offer-receipts.component.html',
  styleUrls: ['./offer-receipts.component.css']
})
export class OfferReceiptsComponent implements OnInit {
  userOfferReceipts$: Observable<UserOfferReceipt[] | []>
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.userOfferReceipts$ = this.store.pipe(select(fromStore.getUserOffer));
  }

}
