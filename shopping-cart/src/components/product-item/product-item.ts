import { Component } from '@angular/core';

/*
  Generated class for the ProductItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'product-item',
  templateUrl: 'product-item.html'
})
export class ProductItemComponent {

  text: string;

  constructor() {
    console.log('Hello ProductItem Component');
    this.text = 'Hello World';
  }

}
