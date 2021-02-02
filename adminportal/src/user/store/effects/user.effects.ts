import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {PortalSyncService, StaticDataService} from '../../services';
import * as usersActions from '../actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usersService: PortalSyncService,
    private userStaticDataService: StaticDataService
  ) { }

  @Effect()
  loadUsersStaticData$ = this.actions$.pipe(
    ofType(usersActions.LOAD_USER_STATIC_DATA),
    switchMap(() => {
      return this.userStaticDataService.getStaticData('placeholder', 'placeholder', 'placeholder').pipe(
        map(userDetails => {

          return new usersActions.LoadUserStaticDataSuccess(userDetails);
        }),
        catchError(error => {
          return of(new usersActions.LoadUserStaticDataFail(error));
        })
      );
    })
  );

  @Effect()
  loadUsersData$ = this.actions$.pipe(
    ofType(usersActions.LOAD_USER_DATA),
    switchMap(() => {
      return this.usersService.getPortalSync('placeholder', 'placeholder', 'placeholder').pipe(
        map(userDetails => {

          return new usersActions.LoadUserDataSuccess(userDetails);
        }),
        catchError(error => {
          return of(new usersActions.LoadUsersDataFail(error));
        })
      );
    })
  );

}
