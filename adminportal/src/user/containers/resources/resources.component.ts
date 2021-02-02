import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {Resource} from '../../models/Resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources$: Observable<Resource[]>;
  constructor(private readonly store: Store<fromStore.UserState>) { }

  ngOnInit(): void {
    this.resources$ = this.store.pipe(select(fromStore.getUserResource));
  }

  onAddResource(a): void {
    // do something
  }

  onRemoveResource(a):void {
    // do something
  }

}
