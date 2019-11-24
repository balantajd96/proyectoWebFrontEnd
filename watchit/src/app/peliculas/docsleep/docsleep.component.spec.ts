import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsleepComponent } from './docsleep.component';

describe('DocsleepComponent', () => {
  let component: DocsleepComponent;
  let fixture: ComponentFixture<DocsleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
