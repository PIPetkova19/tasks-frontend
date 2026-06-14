import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gpaGradePipe',
})
export class GpaGradePipePipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 3.7) { return 'A'; }
    else if (value >= 3.3) { return 'A-'; }
    else if (value >= 3.0) { return 'B+'; }
    else if (value >= 2.7) { return 'B'; }
    else if (value >= 2.3) { return 'B-'; }
    else if (value >= 2.0) { return 'C+'; }
    else if (value >= 1.7) { return 'C'; }
    if (value >= 1.7) return 'C';

    return 'F';
  }
}
