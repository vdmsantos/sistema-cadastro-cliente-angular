import { TestBed } from '@angular/core/testing';

import { ClienteFormService } from './cliente-form.service';

describe('ClienteFormService', () => {
    let service: ClienteFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ClienteFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
