import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {UserCar} from '../../models/UserCar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars$: Observable<UserCar[]>;
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.cars$ = this.store.pipe(select(fromStore.getUserCar));
  }

  onSelectCar(): void {
    // do something
  }

  onRemoveCar(): void {
    // do something
  }

}
