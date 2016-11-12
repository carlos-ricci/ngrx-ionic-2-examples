import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, Todo, TodoModel} from "../../app/common/interfaces";
import {Observable} from "rxjs/Observable";
import {ModalController , NavController } from 'ionic-angular';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../../app/common/actions';
import {DetailsPage} from '../../pages/details/details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  //faking an id for demo purposes
  private id: number = 0;
  public todos$: Observable<Todo[]>; 

  constructor(public navCtrl: NavController, private _store: Store<AppState>, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
      this.todos$ = this._store.select('todos');
      console.log(this._store);
      console.log(this.todos$);
  }

  showDetail(todo) {
    let modal = this.modalCtrl.create(DetailsPage, { todo: todo });
    modal.present();

/*
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
  */
  }

}

