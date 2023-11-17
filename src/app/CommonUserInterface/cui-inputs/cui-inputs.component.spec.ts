import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiInputsComponent } from './cui-inputs.component';

describe('CuiInputsComponent', () => {
  let component: CuiInputsComponent;
  let fixture: ComponentFixture<CuiInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuiInputsComponent]
    });
    fixture = TestBed.createComponent(CuiInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
