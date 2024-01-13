import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMobileListOptionsComponent } from './dialog-mobile-list-options.component';

describe('DialogMobileListOptionsComponent', () => {
  let component: DialogMobileListOptionsComponent;
  let fixture: ComponentFixture<DialogMobileListOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogMobileListOptionsComponent]
    });
    fixture = TestBed.createComponent(DialogMobileListOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
