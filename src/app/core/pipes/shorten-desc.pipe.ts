import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortenDesc' })
export class ShortenDescPipe implements PipeTransform {
    transform(value: string): string {
        return value.substr(0, 1000);
    }
}
