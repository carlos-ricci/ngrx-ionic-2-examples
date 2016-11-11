import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, Todo, TodoModel} from "../../app/common/interfaces";
import {Observable} from "rxjs/Observable";
import { NavController } from 'ionic-angular';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../../app/common/actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  //faking an id for demo purposes
  private id: number = 0;
  public todos$: Observable<Todo[]>; 

  constructor(public navCtrl: NavController, private _store: Store<AppState>) {

  }

  ionViewDidLoad() {
      this.todos$ = this._store.select('todos');
      console.log(this._store);
      console.log(this.todos$);
  }

  addTodo() {
    this._store.dispatch(
      {
        type: ADD_TODO,
        payload: {
          id: ++this.id,
          description: 'Nombre para todo',
          complete:false
        }
      }
    );
  }

}

