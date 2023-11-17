import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiModalComponent } from './cui-modal.component';

describe('CuiModalComponent', () => {
  let component: CuiModalComponent;
  let fixture: ComponentFixture<CuiModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuiModalComponent]
    });
    fixture = TestBed.createComponent(CuiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
