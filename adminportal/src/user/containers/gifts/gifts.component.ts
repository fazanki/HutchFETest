import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {DailyGiftState} from '../../models/DailyGift';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor(private readonly store: Store<fromStore.UserState>) { }
  dailyGift$: Observable<DailyGiftState>;

  ngOnInit(): void {
    this.dailyGift$ = this.store.pipe(select(fromStore.getUserDailyGifts));
  }

}
