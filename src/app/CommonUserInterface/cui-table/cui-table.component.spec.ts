import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiTableComponent } from './cui-table.component';

describe('CuiTableComponent', () => {
  let component: CuiTableComponent;
  let fixture: ComponentFixture<CuiTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuiTableComponent]
    });
    fixture = TestBed.createComponent(CuiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
