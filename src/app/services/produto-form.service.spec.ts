import { TestBed } from '@angular/core/testing';

import { ProdutoFormService } from './produto-form.service';
import { MessageService } from 'primeng/api';

describe('ProdutoFormService', () => {
  let service: ProdutoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProdutoFormService,
        MessageService
      ]
    });
    service = TestBed.inject(ProdutoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
