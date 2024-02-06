import { Component, OnInit } from '@angular/core';
import { DevicesService } from './devices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent implements OnInit {
  constructor(
    private deviceService: DevicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  devices: any[] = [];

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();
  }

  goToOutdoorDevices() {
    this.router.navigate(['outdoor'], { relativeTo: this.activatedRoute });
  }

  showDeviceDetails(device: { id: number }) {
    this.router.navigate(['indoor/', device.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
