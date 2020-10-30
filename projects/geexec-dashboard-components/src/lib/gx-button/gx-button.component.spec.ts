import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GxButtonComponent } from './gx-button.component';

describe('GxButtonComponent', () => {
  let component: GxButtonComponent;
  let fixture: ComponentFixture<GxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
