import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GxInputComponent } from './gx-input.component';

describe('GxInputComponent', () => {
  let component: GxInputComponent;
  let fixture: ComponentFixture<GxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
