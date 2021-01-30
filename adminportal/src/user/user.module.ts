import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { userRouting } from './user.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// containers
import * as fromContainers from './containers';

// // components
// import * as fromComponents from './components';
//
// // services
// import * as fromServices from './services';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    userRouting,
    // StoreModule.forFeature('users', reducers),
    // EffectsModule.forFeature(effects),
    FormsModule,
  ],
  exports: [...fromContainers.containers,],
  declarations: [...fromContainers.containers,],
  providers: []
})

/**
 * Entry point to UsersModule
 */

export class UserModule {}
