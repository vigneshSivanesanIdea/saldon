import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeHeaderComponent } from './marquee-header.component';

describe('MarqueeHeaderComponent', () => {
  let component: MarqueeHeaderComponent;
  let fixture: ComponentFixture<MarqueeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarqueeHeaderComponent]
    });
    fixture = TestBed.createComponent(MarqueeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
