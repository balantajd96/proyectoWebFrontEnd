import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Johnwick1Component } from './johnwick1.component';

describe('Johnwick1Component', () => {
  let component: Johnwick1Component;
  let fixture: ComponentFixture<Johnwick1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Johnwick1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Johnwick1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
