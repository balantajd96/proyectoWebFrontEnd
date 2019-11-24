import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitanAmericaComponent } from './capitan-america.component';

describe('CapitanAmericaComponent', () => {
  let component: CapitanAmericaComponent;
  let fixture: ComponentFixture<CapitanAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitanAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitanAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
