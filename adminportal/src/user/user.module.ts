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
import { IapReceptsComponent } from './components/iap-recepts/iap-recepts.component';
import { OfferReceiptsComponent } from './components/offer-receipts/offer-receipts.component';
import { SocialDetailsComponent } from './components/social-details/social-details.component';
import { CarsComponent } from './components/cars/cars.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AugmentsComponent } from './components/augments/augments.component';
import { FuelComponent } from './components/fuel/fuel.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { FtueComponent } from './components/ftue/ftue.component';
import { FusionCreditsComponent } from './components/fusion-credits/fusion-credits.component';




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
