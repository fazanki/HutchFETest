import * as fromUser from '../actions/user.actions';
import {UserAppProfile} from '../../models/UserAppProfile';
import {LogEntry} from '../../models/LogEntry';
import {UserIAPReceipt} from '../../models/UserIAPReceipt';
import {UserOfferReceipt} from '../../models/UserOfferReceipt';
import {SocialDetails} from '../../models/SocialDetails';
import {UserCar} from '../../models/UserCar';
import {Resource} from '../../models/Resource';
import {UserAugment} from '../../models/UserAugment';
import {Fuel} from '../../models/Fuel';
import {FTUEProgress} from '../../models/FTUEProgress';
import {DailyGiftState} from '../../models/DailyGift';
import {FusionCredits} from '../../models/FusionCredits';
import {Manufacturer} from '../../../app/enums/Manufacturer';

export interface UserState {
  userStaticData: any;
  userProfile: UserAppProfile | {};
  errorLogs: LogEntry[] | [];
  userIAPReceipts: UserIAPReceipt[] | [];
  offerReceipts: UserOfferReceipt[] | [];
  socialDetails: SocialDetails[] | [];
  userCars: UserCar[] | [];
  userResources: Resource[] | [];
  userAugments: UserAugment[] | [];
  fuel: Fuel[] | {};
  ftueProgress: FTUEProgress[] | [];
  dailyGifts: DailyGiftState | {};
  fusionCredits: FusionCredits[] | [];
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  userStaticData: {},
  userProfile: {},
  errorLogs: [],
  userIAPReceipts: [],
  offerReceipts: [],
  socialDetails: [],
  userCars: [],
  userResources: [],
  userAugments: [],
  fuel: {},
  dailyGifts: {},
  ftueProgress: [],
  fusionCredits: [],
  loaded: true,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromUser.UserActions
): UserState {
  switch (action.type) {
    case fromUser.LOAD_USER_STATIC_DATA_SUCCESS: {
      const userStaticData = action.payload;
      return {
        ...state,
        userStaticData,
      };
    }

    case fromUser.LOAD_USER_DATA_SUCCESS: {
      const user = action.payload;
      const userProfile = user.userProfile;
      const errorLogs = user.logEntries;
      const userIAPReceipts = user.userIAPReceipts;
      const offerReceipts = user.userOfferReceipts;
      const socialDetails = user.socialAccounts;
      const fuel = user.fuel;
      const dailyGifts =  user.dailyGift;
      const ftueProgress = user.ftueProgress.map(ftue => {
        return {
          ...ftue,
          stepOptions: ['todo 1', 'todo 2']  // get this from the static state
        };
      });
      const userCars = user.userCars.map(c => {
        const carObj = state.userStaticData.cars.filter(car => car.carId === c.carId)[0];
        const imageName = carObj.imageName;
        const modelName = carObj.modelName;
        const stars = carObj.stars;
        return {
          imageName,
          modelName,
          stars
        };
      });
      const userResources = user.userResources.map(res => {
        const resObj = state.userStaticData.resources.filter(re => re.resourceId === res.resourceId)[0];
        const imageName = resObj.imageName;
        const resourceId = res.resourceId;
        const category = resObj.category;
        const displayName = resObj.displayName;
        const maxAmount = resObj.maxAmount;
        const amount = res.amount;
        return {
          imageName,
          resourceId,
          category,
          displayName,
          maxAmount,
          amount
        };
      });
      const userAugments = user.userAugments.map(a => {
        const augObj = state.userStaticData.augments.filter(aug => aug.augmentId === a.augmentId)[0];
        const imageName = augObj.imageName;
        const displayName = augObj.displayName;
        const userCarId = a.userCarId;
        const userAugmentId = a.userAugmentId;
        const slot = a.slot;
        return {
          imageName,
          displayName,
          userCarId,
          userAugmentId,
          slot
        };
      });
      const fusionCredits = user.fusionCredits.map(credit => {
        return {
          ...credit,
          manufacturer: Manufacturer[credit.manufacturerId]
        };
      });
      return {
        ...state,
        userProfile,
        errorLogs,
        userIAPReceipts,
        offerReceipts,
        socialDetails,
        userCars,
        userResources,
        userAugments,
        fuel,
        dailyGifts,
        ftueProgress,
        fusionCredits,
        loaded: true
      };
    }

    default:
      return state;
  }
}

export const getPrifile = (state: UserState) => state.userProfile;
export const getErrorLogs = (state: UserState) => state.errorLogs;
export const getIAP = (state: UserState) => state.userIAPReceipts;
export const getUserOfferReceipts = (state: UserState) => state.offerReceipts;
export const getSocialDetails = (state: UserState) => state.socialDetails;
export const getCars = (state: UserState) => state.userCars;
export const getUserRes = (state: UserState) => state.userResources;
export const getUserAug = (state: UserState) => state.userAugments;
export const getFuel = (state: UserState) => state.fuel;
export const getDailyGifts = (state: UserState) => state.dailyGifts;
export const getFtueProgress = (state: UserState) => state.ftueProgress;
export const getFusionCredits = (state: UserState) => state.fusionCredits;
