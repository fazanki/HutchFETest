// routes
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {UserComponent} from './containers/user/user.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent
  }
  // {
  //   path: 'user/:userId',
  //   component: UserDetailsComponent
  // },
  // {
  //   path: 'invite-user',
  //   component: InviteUserComponent,
  // },
  // {
  //   path: 'invite-user-success',
  //   component: InviteUserSuccessComponent,
  // },
  // {
  //   path: 'user/:userId/editpermission',
  //   component: EditUserPermissionComponent,
  // }
];


export const userRouting: ModuleWithProviders<any> = RouterModule.forChild(ROUTES);
