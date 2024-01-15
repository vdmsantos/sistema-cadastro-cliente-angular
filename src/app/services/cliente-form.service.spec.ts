import { TestBed } from '@angular/core/testing';

import { ClienteFormService } from './cliente-form.service';
import { MessageService } from 'primeng/api';

describe('ClienteFormService', () => {
    let service: ClienteFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ClienteFormService,
                MessageService,  // Make sure MessageService is provided
            ],
        });
        service = TestBed.inject(ClienteFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
