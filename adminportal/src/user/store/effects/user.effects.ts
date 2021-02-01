import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PortalSyncService } from '../../services';
import * as usersActions from '../actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usersService: PortalSyncService,
  ) { }

  @Effect()
  loadUsersData$ = this.actions$.pipe(
    ofType(usersActions.LOAD_USER_DATA),
    switchMap(() => {
      return this.usersService.getPortalSync('placeholder', 'placeholder', 'placeholder').pipe(
        map(userDetails => {

          return new usersActions.LoadUsersSuccess(userDetails);
        }),
        catchError(error => {
          return of(new usersActions.LoadusersFail(error));
        })
      );
    })
  );

}
