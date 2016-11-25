import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter} from '@angular/core';
import { IProduct } from '../../reducers/products';




/*
  Generated class for the ProductItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'product-item',
  templateUrl: 'product-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {

  @Input()
  product: IProduct;

  @Output()
  addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() {
    
  }

}
