import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseDetailsComponent } from './devise-details.component';

describe('DeviseDetailsComponent', () => {
  let component: DeviseDetailsComponent;
  let fixture: ComponentFixture<DeviseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
