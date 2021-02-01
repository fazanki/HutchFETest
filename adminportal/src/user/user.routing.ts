// routes
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {UserComponent} from './containers/user/user.component';
import {AccountInfoComponent} from './containers/account-info/account-info.component';
import {ErrorLogsComponent} from './containers/error-logs/error-logs.component';
import {IapReceptsComponent} from './containers/iap-recepts/iap-recepts.component';
import {OfferReceiptsComponent} from './containers/offer-receipts/offer-receipts.component';
import {SocialDetailsComponent} from './containers/social-details/social-details.component';
import {CarsComponent} from './containers/cars/cars.component';
import {ResourcesComponent} from './containers/resources/resources.component';
import {AugmentsComponent} from './containers/augments/augments.component';
import {FuelComponent} from './containers/fuel/fuel.component';
import {GiftsComponent} from './containers/gifts/gifts.component';
import {FtueComponent} from './containers/ftue/ftue.component';
import {FusionCreditsComponent} from './containers/fusion-credits/fusion-credits.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'account-info',
        component: AccountInfoComponent
      },
      {
        path: 'error-logs',
        component: ErrorLogsComponent
      },
      {
        path: 'iap-receipts',
        component: IapReceptsComponent
      },
      {
        path: 'offer-receipts',
        component: OfferReceiptsComponent
      },
      {
        path: 'social-details',
        component: SocialDetailsComponent
      },
      {
        path: 'cars',
        component: CarsComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent
      },
      {
        path: 'aguments',
        component: AugmentsComponent
      },
      {
        path: 'fuel',
        component: FuelComponent
      },
      {
        path: 'daily-gift',
        component: GiftsComponent
      },
      {
        path: 'ftue',
        component: FtueComponent
      },
      {
        path: 'fusion-credits',
        component: FusionCreditsComponent
      }
    ]
  }
];


export const userRouting: ModuleWithProviders<any> = RouterModule.forChild(ROUTES);
