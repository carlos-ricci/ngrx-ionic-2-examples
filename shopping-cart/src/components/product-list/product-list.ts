import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from '../../reducers/products';

/*
  Generated class for the ProductList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  
  @Input() products: IProduct[];
  @Output() addToCart = new EventEmitter<IProduct>();

  constructor() {
  }

}
