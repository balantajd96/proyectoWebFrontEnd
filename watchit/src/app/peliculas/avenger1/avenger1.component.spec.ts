import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avenger1Component } from './avenger1.component';

describe('Avenger1Component', () => {
  let component: Avenger1Component;
  let fixture: ComponentFixture<Avenger1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avenger1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avenger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
