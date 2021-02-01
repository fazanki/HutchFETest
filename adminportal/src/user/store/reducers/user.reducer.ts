import * as fromUser from '../actions/user.actions';

export interface UserState {
  user: object;
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  user: {},
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

      return {
        ...state,
        user,
        loaded: true
      };
    }

    default:
      return state;
  }
}

export const getUser = (state: UserState) => state.user;
