import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeContentComponent } from './horoscope-content.component';

describe('HoroscopeContentComponent', () => {
  let component: HoroscopeContentComponent;
  let fixture: ComponentFixture<HoroscopeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoroscopeContentComponent]
    });
    fixture = TestBed.createComponent(HoroscopeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
