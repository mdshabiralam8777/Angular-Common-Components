import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiDropdownComponent } from './cui-dropdown.component';

describe('CuiDropdownComponent', () => {
  let component: CuiDropdownComponent;
  let fixture: ComponentFixture<CuiDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuiDropdownComponent]
    });
    fixture = TestBed.createComponent(CuiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
