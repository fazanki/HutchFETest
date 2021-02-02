import {Action} from '@ngrx/store';

export const LOAD_USER_DATA = '[User] Load User Data';
export const LOAD_USER_DATA_SUCCESS = '[User] Load User Data Success';
export const LOAD_USER_DATA_FAIL = '[User] Load User Data Fail';

export const LOAD_USER_STATIC_DATA = '[User] Load User Static Data';
export const LOAD_USER_STATIC_DATA_SUCCESS = '[User] Load User Static Data Success';
export const LOAD_USER_STATIC_DATA_FAIL = '[User] Load User Static Data Fail';

export class LoadUserData implements Action{
  readonly type = LOAD_USER_DATA;
  constructor() { }
}

export class LoadUserDataSuccess implements Action {
  readonly type = LOAD_USER_DATA_SUCCESS;
  constructor(public payload: any) { }  // TODO add type list of users
}

export class LoadUsersDataFail implements Action {
  readonly type = LOAD_USER_DATA_FAIL;
  constructor(public payload: any) {
  }
}

export class LoadUserStaticData implements Action{
  readonly type = LOAD_USER_STATIC_DATA;
  constructor() { }
}

export class LoadUserStaticDataSuccess implements Action {
  readonly type = LOAD_USER_STATIC_DATA_SUCCESS;
  constructor(public payload: any) { }  // TODO add type list of users
}

export class LoadUserStaticDataFail implements Action {
  readonly type = LOAD_USER_STATIC_DATA_FAIL;
  constructor(public payload: any) {
  }
}


export type UserActions =
  | LoadUserData
  | LoadUserDataSuccess
  | LoadUsersDataFail
  | LoadUserStaticData
  | LoadUserStaticDataSuccess
  | LoadUserStaticDataFail;

