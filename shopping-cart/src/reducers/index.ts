import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/combineLatest'

import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';

import  * as fromCart from './cart';
import  * as fromProducts from './products';

export interface AppState {
    cart: fromCart.CartState;
    products: fromProducts.ProductsState;
}


export function getCartState() {
    return (state$: Observable<AppState>) => state$
        .select(s => s.cart);
}

export function getProductState() {
    return (state$: Observable<AppState>) => state$
        .select(s => s.products);
}


export function getProductEntities() {
    return compose(fromProducts.getProductEntities(), getProductState());
}

export function getProductsAsArry() {
    return compose(fromProducts.getProductsAsArry(), getProductState());
}

export function getCalculatedCartList() {
    return (state$: Observable<AppState>) => {
        return Observable
            .combineLatest(state$.let(getCartState()), state$.let(getProductEntities()))
                .map(([cart, products]: any[]) => {
                    return cart.productIds.map(productId => {
                        return {
                            title: products[productId].title,
                            price: products[productId].price,
                            quantity: cart.quantityById[productId]
                        };
                    });
                });
    };
}
