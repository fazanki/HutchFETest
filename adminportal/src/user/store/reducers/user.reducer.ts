import * as fromUser from '../actions/user.actions';
import {UserAppProfile} from '../../models/UserAppProfile';
import {LogEntry} from '../../models/LogEntry';
import {UserIAPReceipt} from '../../models/UserIAPReceipt';
import {UserOfferReceipt} from '../../models/UserOfferReceipt';

export interface UserState {
  user: object;
  userProfile: UserAppProfile | {};
  errorLogs: LogEntry[] | [];
  userIAPReceipts: UserIAPReceipt[] | [];
  offerReceipts: UserOfferReceipt[] | [];
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  user: {},
  userProfile: {},
  errorLogs: [],
  userIAPReceipts: [],
  offerReceipts: [],
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
      const errorLogs = user.logEntries;
      const userIAPReceipts = user.userIAPReceipts;
      const offerReceipts = user.userOfferReceipts;
      return {
        ...state,
        user,
        userProfile,
        errorLogs,
        userIAPReceipts,
        offerReceipts,
        loaded: true
      };
    }

    default:
      return state;
  }
}

export const getUser = (state: UserState) => state.user;
export const getPrifile = (state: UserState) => state.userProfile;
export const getErrorLogs = (state: UserState) => state.errorLogs;
export const getIAP = (state: UserState) => state.userIAPReceipts;
export const getUserOfferReceipts = (state: UserState) => state.offerReceipts;
