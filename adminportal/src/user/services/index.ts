import {PortalSyncService} from './portal-sync.service';
import {StaticDataService} from './static-data.service';

export const services: any[] = [
  PortalSyncService,
  StaticDataService
];

export * from './portal-sync.service';
export * from './static-data.service';
