import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { userRouting } from './user.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { reducers, effects } from './store';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponents from './components';

// // services
import * as fromServices from './services';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    userRouting,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
  ],
  exports: [...fromContainers.containers, ...fromComponents.components],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services]
})

/**
 * Entry point to UsersModule
 */

export class UserModule {}
