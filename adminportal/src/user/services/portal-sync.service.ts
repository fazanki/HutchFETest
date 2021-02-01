import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockPortalSync } from '../../app/mockdata/PortalSync';
import { PortalSync } from '../../app/interfaces/responses/PortalSync';

@Injectable({
  providedIn: 'root'
})
export class PortalSyncService {

  constructor() { }

  getPortalSync(appVersion: string, dataVersion: string, adminToken: string): Observable<PortalSync> {
    return of(MockPortalSync);
  }
}
