// routes
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {UserComponent} from './containers/user/user.component';
import {AccountInfoComponent} from './containers/account-info/account-info.component';
import {ErrorLogsComponent} from './containers/error-logs/error-logs.component';

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
      }
    ]
  }
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
