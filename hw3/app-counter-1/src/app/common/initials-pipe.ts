import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: string, separator: string = '.'): string {
    if (!value) { return value; }

    return value.split(' ')
      .map(word => word[0].toUpperCase())
      .join(separator);
  }
}
