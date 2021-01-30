import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { userRouting } from './user.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { HttpClientModule } from '@angular/common/http';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponents from './components';

// services
import * as fromServices from './services';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { ErrorLogsComponent } from './components/error-logs/error-logs.component';
import { IapReceptsComponent } from './containers/iap-recepts/iap-recepts.component';
import { OfferReceiptsComponent } from './containers/offer-receipts/offer-receipts.component';
import { SocialDetailsComponent } from './containers/social-details/social-details.component';
import { CarsComponent } from './containers/cars/cars.component';
import { ResourcesComponent } from './containers/resources/resources.component';
import { AugmentsComponent } from './containers/augments/augments.component';
import { FuelComponent } from './containers/fuel/fuel.component';
import { GiftsComponent } from './containers/gifts/gifts.component';
import { FtueComponent } from './containers/ftue/ftue.component';
import { FusionCreditsComponent } from './containers/fusion-credits/fusion-credits.component';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    userRouting,
    SharedModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
  ],
  exports: [...fromContainers.containers, ...fromComponents.components],
  declarations: [...fromContainers.containers,  ...fromComponents.components, AccountInfoComponent, ErrorLogsComponent, IapReceptsComponent, OfferReceiptsComponent, SocialDetailsComponent, CarsComponent, ResourcesComponent, AugmentsComponent, FuelComponent, GiftsComponent, FtueComponent, FusionCreditsComponent],
  providers: [...fromServices.services]
})

/**
 * Entry point to UsersModule
 */

export class UsersModule {}
