import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avenger2Component } from './avenger2.component';

describe('Avenger2Component', () => {
  let component: Avenger2Component;
  let fixture: ComponentFixture<Avenger2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avenger2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avenger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
