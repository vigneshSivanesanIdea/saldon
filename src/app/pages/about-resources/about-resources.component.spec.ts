import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResourcesComponent } from './about-resources.component';

describe('AboutResourcesComponent', () => {
  let component: AboutResourcesComponent;
  let fixture: ComponentFixture<AboutResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutResourcesComponent]
    });
    fixture = TestBed.createComponent(AboutResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
