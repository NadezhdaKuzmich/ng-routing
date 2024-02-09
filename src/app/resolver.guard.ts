import { inject } from '@angular/core';
import { DevicesService } from './components/devices/devices.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

export const resolverGuard: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const devicesService = inject(DevicesService);

  return devicesService.getDeviceById(route.params['id']);
};
