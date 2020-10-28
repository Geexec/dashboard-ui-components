import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GxHeadingComponent } from './gx-heading.component';

describe('GxHeadingComponent', () => {
  let component: GxHeadingComponent;
  let fixture: ComponentFixture<GxHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GxHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GxHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
