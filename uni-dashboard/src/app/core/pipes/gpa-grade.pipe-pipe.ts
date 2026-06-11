import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gpaGradePipe',
})
export class GpaGradePipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
