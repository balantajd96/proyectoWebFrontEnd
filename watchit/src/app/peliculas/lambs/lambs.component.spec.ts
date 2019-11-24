import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambsComponent } from './lambs.component';

describe('LambsComponent', () => {
  let component: LambsComponent;
  let fixture: ComponentFixture<LambsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
