import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

/*
  Generated class for the CartItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cart-item',
  templateUrl: 'cart-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input()
  cartItem: any;

  constructor() {
  }

}
