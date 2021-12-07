import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitCount'
})
export class DigitCountPipe implements PipeTransform {

  transform(val: number): number {
    return val.toString().length;
  }

}
