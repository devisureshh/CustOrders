import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(el: ElementRef) {
    console.log(el) ;
    console.log("directive is working") ;
    el.nativeElement.style.fontSize='70px';
   }

}
