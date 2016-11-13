import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, Todo, TodoModel} from "../../app/common/interfaces";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/combineLatest";
import {ModalController , NavController } from 'ionic-angular';
import {DetailsPage} from '../../pages/details/details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  public todos$: Observable<Todo[]>; 
  public visibilityFilter$: any;
  public todosModel$ : Observable<TodoModel>;
  public completedTodos$: Observable<number>;
  public totalTodos$: Observable<number>;
  public filteredTodos$: Observable<Todo[]>;
  

  public filters = [
        {friendly: "All", action: 'SHOW_ALL'},
        {friendly: "Completed", action: 'SHOW_COMPLETED'},
        {friendly: "Active", action: 'SHOW_ACTIVE'}
  ]; 

  constructor(public navCtrl: NavController, private _store: Store<AppState>, public modalCtrl: ModalController) {
      
      this.todos$ = this._store.select('todos');
      this.visibilityFilter$ = this._store.select('visibilityFilter');
      this.todosModel$ = this.todos$.combineLatest(
        this.visibilityFilter$,
        (todos: Todo[], visibilityFilter:any)  => {
					return {
						filteredTodos: todos.filter(visibilityFilter),
						totalTodos: todos.length,
						completedTodos: todos.filter((todo : Todo) => todo.complete).length
					}
				}
      );
      this.totalTodos$ = this.todosModel$.combineLatest((todoModel) => {return todoModel.totalTodos});
      this.completedTodos$ = this.todosModel$.combineLatest((todoModel) => {return todoModel.completedTodos});
      this.filteredTodos$ = this.todosModel$.combineLatest((todoModel) => {return todoModel.filteredTodos});

  }

  showDetail(todo) {
    let modal = this.modalCtrl.create(DetailsPage, { todo: todo });
    modal.onDidDismiss(data => {
      if(data)
      {
        this._store.dispatch(data);
      };
    });
    modal.present();
  }

  filterChanged(filter) {
    this._store.dispatch({type: filter});
  }

}

