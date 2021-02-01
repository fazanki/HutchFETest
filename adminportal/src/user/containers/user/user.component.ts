import { Component, OnInit } from '@angular/core';
import {UserNavigationModel} from '../../models/userNavigationModel';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  navigation: UserNavigationModel[] = [
    {
      label: 'Account Info',
      url: 'account-info',
      isActive: true
    },
    {
      label: 'Error Logs',
      url: 'error-logs',
      isActive: false
    },
    {
      label: 'IAP Receipts',
      url: 'iap-receipts',
      isActive: false
    },
    {
      label: 'Offer Receipts',
      url: 'offer-receipts',
      isActive: false
    },
    {
      label: 'Social Details',
      url: 'social-details',
      isActive: false
    },
    {
      label: 'Cars',
      url: 'cars',
      isActive: false
    },
    {
      label: 'Resources',
      url: 'resources',
      isActive: false
    },
    {
      label: 'Aguments',
      url: 'aguments',
      isActive: false
    },
    {
      label: 'Fuel',
      url: 'fuel',
      isActive: false
    },
    {
      label: 'Daily Gift',
      url: 'daily-gift',
      isActive: false
    },
    {
      label: 'Ftue',
      url: 'ftue',
      isActive: false
    },
    {
      label: 'Fusion Credits',
      url: 'fusion-credits',
      isActive: false
    },
  ];

  constructor(
    private router: Router,
    private location: Location,
    private readonly store: Store<fromStore.UserState>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadUserData());
    this.updateLinks(this.location.path().split('/')[2]);
  }

  onUserNavigate(url): void {
    this.router.navigateByUrl(`user/${url}`);
    this.updateLinks(url);
  }

  updateLinks(url): void {
    this.navigation = this.navigation.map((nav) => {
      return nav.url === url ?  {...nav, isActive: true} : {...nav, isActive: false};
    });
  }

}
