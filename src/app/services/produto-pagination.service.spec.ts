import { TestBed } from '@angular/core/testing';

import { ProdutoPaginationService } from './produto-pagination.service';

describe('ProdutoPaginationService', () => {
  let service: ProdutoPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
