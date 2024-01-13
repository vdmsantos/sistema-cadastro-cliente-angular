import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toLocaleString'
})
export class ToLocaleStringPipe implements PipeTransform {

    transform(value: string): string {
        return new Date(value).toLocaleString();
    }

}
