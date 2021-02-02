import * as fromUser from '../actions/user.actions';
import {UserAppProfile} from '../../models/UserAppProfile';

export interface UserState {
  user: object;
  userProfile: UserAppProfile | {};
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  user: {},
  userProfile: {},
  loaded: true,
  loading: true
};

export function reducer(
  state = initialState,
  action: fromUser.UserActions
): UserState {
  switch (action.type) {
    case fromUser.LOAD_USER_DATA_SUCCESS: {
      const user = action.payload;
      const userProfile = user.userProfile;

      return {
        ...state,
        user,
        userProfile,
        loaded: true
      };
    }

    default:
      return state;
  }
}

export const getUser = (state: UserState) => state.user;
export const getPrifile = (state: UserState) => state.userProfile;
