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

export const getUserErrors = createSelector(
  getUserState,
  fromUser.getErrorLogs
);

export const getIAPReceipts = createSelector(
  getUserState,
  fromUser.getIAP
);

export const getUserOffer = createSelector(
  getUserState,
  fromUser.getUserOfferReceipts
);

export const getUserSocialDetails = createSelector(
  getUserState,
  fromUser.getSocialDetails
);

export const getUserCar = createSelector(
  getUserState,
  fromUser.getCars
);

export const getUserResource = createSelector(
  getUserState,
  fromUser.getUserRes
);

export const getUserAugments = createSelector(
  getUserState,
  fromUser.getUserAug
);

export const getUserFuel = createSelector(
  getUserState,
  fromUser.getFuel
);

export const getUserDailyGifts = createSelector(
  getUserState,
  fromUser.getDailyGifts
);

export const getUserFtueProgress = createSelector(
  getUserState,
  fromUser.getFtueProgress
);

export const getUserFusionCredits = createSelector(
  getUserState,
  fromUser.getFusionCredits
);
