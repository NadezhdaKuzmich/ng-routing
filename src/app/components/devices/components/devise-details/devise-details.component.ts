import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DevicesService } from '../../devices.service';

@Component({
  selector: 'app-devise-details',
  templateUrl: './devise-details.component.html',
  styleUrl: './devise-details.component.scss',
})
export class DeviseDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceService: DevicesService,
    private router: Router
  ) {}

  id: number | undefined;
  deviceName: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = Number(param.get('id'));
      this.deviceName = this.deviceService.getDeviceById(this.id);
    });
  }
}
