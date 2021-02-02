import { createSelector } from '@ngrx/store';

import * as fromFeature from '../../store/reducers';
import * as fromUser from '../reducers/user.reducer';

export const getUserState = createSelector(
  fromFeature.getRootUserState,
  (state: fromFeature.UserState) => state.userData
);

export const getUserProfile = createSelector(
  getUserState,
  fromUser.getPrifile
);
