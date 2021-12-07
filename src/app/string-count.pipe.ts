import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCount'
})
export class StringCountPipe implements PipeTransform {

  transform(value:string): number {
    return value.length;
  }

}
