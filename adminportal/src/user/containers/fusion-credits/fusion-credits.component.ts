import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {FusionCredits} from '../../models/FusionCredits';

@Component({
  selector: 'app-fusion-credits',
  templateUrl: './fusion-credits.component.html',
  styleUrls: ['./fusion-credits.component.css']
})
export class FusionCreditsComponent implements OnInit {
  fusionCredits$: Observable<FusionCredits[] | []>
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.fusionCredits$ = this.store.pipe(select(fromStore.getUserFusionCredits));
  }

}
