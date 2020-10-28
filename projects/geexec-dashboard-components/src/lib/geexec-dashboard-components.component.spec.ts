import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeexecDashboardComponentsComponent } from './geexec-dashboard-components.component';

describe('GeexecDashboardComponentsComponent', () => {
  let component: GeexecDashboardComponentsComponent;
  let fixture: ComponentFixture<GeexecDashboardComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeexecDashboardComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeexecDashboardComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
