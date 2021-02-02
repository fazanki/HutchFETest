import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {FTUEProgress} from '../../models/FTUEProgress';

@Component({
  selector: 'app-ftue',
  templateUrl: './ftue.component.html',
  styleUrls: ['./ftue.component.css']
})
export class FtueComponent implements OnInit {
  ftueProgress$: Observable<FTUEProgress[] | []>;
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.ftueProgress$ = this.store.pipe(select(fromStore.getUserFtueProgress));
  }

  onSubmitStarted(a): void {
    // do something
  }

  onSubmitComplete(): void {
    // do something
  }

}
