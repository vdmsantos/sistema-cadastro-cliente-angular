import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaginatorComponent } from './list-paginator.component';

describe('ListPaginatorComponent', () => {
  let component: ListPaginatorComponent;
  let fixture: ComponentFixture<ListPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPaginatorComponent]
    });
    fixture = TestBed.createComponent(ListPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
