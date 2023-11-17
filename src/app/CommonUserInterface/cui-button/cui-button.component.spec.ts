import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiButtonComponent } from './cui-button.component';

describe('CuiButtonComponent', () => {
  let component: CuiButtonComponent;
  let fixture: ComponentFixture<CuiButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuiButtonComponent]
    });
    fixture = TestBed.createComponent(CuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
