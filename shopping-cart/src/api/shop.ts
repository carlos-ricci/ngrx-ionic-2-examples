/**
 * Mocking client-server processing
 */
import {jsonProducts} from './productsJSON';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/delay";

const TIMEOUT = 100;

export default {
    getProducts(timeout) {
        return Observable.of(jsonProducts)
            .delay(timeout || TIMEOUT);
    },

    buyProducts(payload, timeout) {
         return Observable.timer(timeout || TIMEOUT);
    }
}