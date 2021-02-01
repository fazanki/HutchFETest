import {Action} from '@ngrx/store';

export const LOAD_USER_DATA = '[User] Load User Data';
export const LOAD_USER_DATA_SUCCESS = '[User] Load User Data Success';
export const LOAD_USER_DATA_FAIL = '[User] Load User Data Fail';

export class LoadUserData implements Action{
  readonly type = LOAD_USER_DATA;
  constructor() { }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USER_DATA_SUCCESS;
  constructor(public payload: any) { }  // TODO add type list of users
}

export class LoadusersFail implements Action {
  readonly type = LOAD_USER_DATA_FAIL;
  constructor(public payload: any) {
  }
}


export type UserActions =
  | LoadUserData
  | LoadUsersSuccess
  | LoadusersFail;

