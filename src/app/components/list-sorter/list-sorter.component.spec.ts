import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSorterComponent } from './list-sorter.component';

describe('ListSorterComponent', () => {
  let component: ListSorterComponent;
  let fixture: ComponentFixture<ListSorterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSorterComponent]
    });
    fixture = TestBed.createComponent(ListSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
