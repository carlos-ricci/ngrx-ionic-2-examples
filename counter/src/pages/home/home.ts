import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from '../../services/app-state';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  counter:  Observable<number>;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {

  }

  ionViewDidLoad() {
      this.counter = this.store.select('counter');
  }
  
  increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }

    incrementAsync(){
        setTimeout(() => {
            this.store.dispatch({type: 'INCREMENT'});
        }, 1000);
    }

    decrementAsync(){
        setTimeout(() => {
            this.store.dispatch({type: 'DECREMENT'});
        }, 1000);
    }
}
