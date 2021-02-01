import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MockStaticData} from '../../app/mockdata/StaticData';
import {StaticData} from '../../app/interfaces/responses/StaticData';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }

  getStaticData(appVersion: string, dataVersion: string, adminToken: string): Observable<StaticData> {
    return of(MockStaticData);
  }
}
