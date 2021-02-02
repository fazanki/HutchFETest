import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {SocialDetails} from '../../models/SocialDetails';

@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.component.html',
  styleUrls: ['./social-details.component.css']
})
export class SocialDetailsComponent implements OnInit {
  socialAccounts$: Observable<SocialDetails[] | []>;
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.socialAccounts$ = this.store.pipe(select(fromStore.getUserSocialDetails));
  }

}
