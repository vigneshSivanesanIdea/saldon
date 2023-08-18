import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePage2Component } from './sale-page2.component';

describe('SalePage2Component', () => {
  let component: SalePage2Component;
  let fixture: ComponentFixture<SalePage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalePage2Component]
    });
    fixture = TestBed.createComponent(SalePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
