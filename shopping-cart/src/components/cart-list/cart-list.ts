import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

/*
  Generated class for the CartList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent {

    @Input() cartList: any;
    @Output() checkout = new EventEmitter<any>();

  constructor() {
  }

}
