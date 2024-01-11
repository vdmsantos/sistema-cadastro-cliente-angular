import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    constructor() { }

    newUUID() {
        return self.crypto.randomUUID()
    }
}
