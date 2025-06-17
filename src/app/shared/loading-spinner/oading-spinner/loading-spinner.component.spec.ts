import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OadingSpinnerComponent } from './loading-spinner.component';

describe('OadingSpinnerComponent', () => {
  let component: OadingSpinnerComponent;
  let fixture: ComponentFixture<OadingSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OadingSpinnerComponent],
    });
    fixture = TestBed.createComponent(OadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
