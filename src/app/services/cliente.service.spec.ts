import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { MessageService } from 'primeng/api';

describe('ClienteService', () => {
    let service: ClienteService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ClienteService,
                MessageService,  // Make sure MessageService is provided
            ],
        });
        service = TestBed.inject(ClienteService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
