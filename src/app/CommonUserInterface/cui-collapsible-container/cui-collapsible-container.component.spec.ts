import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiCollapsibleContainerComponent } from './cui-collapsible-container.component';

describe('CuiCollapsibleContainerComponent', () => {
  let component: CuiCollapsibleContainerComponent;
  let fixture: ComponentFixture<CuiCollapsibleContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuiCollapsibleContainerComponent]
    });
    fixture = TestBed.createComponent(CuiCollapsibleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
