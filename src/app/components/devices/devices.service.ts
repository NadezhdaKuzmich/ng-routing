import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private devices = [
    {
      id: 1,
      device: 'Microwave',
      brand: 'Samsung',
    },
    {
      id: 2,
      device: 'Teapot',
      brand: 'Philips',
    },
    {
      id: 3,
      device: 'Vaccum Cleaner',
      brand: 'Bosh',
    },
  ];

  constructor() {}

  getDevices() {
    return this.devices;
  }

  getDeviceById(id: number) {
    return this.getDevices().find((item) => item.id === +id);
  }
}
