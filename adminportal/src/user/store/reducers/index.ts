import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';
import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export interface UserState {
  userData: fromUser.UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  userData: fromUser.reducer
};

export const getRootUserState = createFeatureSelector<UserState>(
  'user'
);

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
