import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorComponent } from './indoor.component';

describe('IndoorComponent', () => {
  let component: IndoorComponent;
  let fixture: ComponentFixture<IndoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndoorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
