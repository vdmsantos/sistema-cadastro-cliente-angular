import { TestBed } from '@angular/core/testing';

import { CepService } from './cep.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CepService', () => {
    let service: CepService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [HttpClient],
        });
        service = TestBed.inject(CepService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
