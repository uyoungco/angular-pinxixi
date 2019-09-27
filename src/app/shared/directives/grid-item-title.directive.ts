import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {
  @HostBinding('style.grid-area') @Input() appGridItemTitle = '2rem';
  @HostBinding('style.font-size') area = '0.6rem';
  constructor() {}
}
