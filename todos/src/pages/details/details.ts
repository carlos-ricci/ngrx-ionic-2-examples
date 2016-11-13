import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {ADD_TODO, SAVE_TODO, REMOVE_TODO} from '../../app/common/actions';
import {Todo} from "../../app/common/interfaces";

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  public todo: Todo;
  public isNew = true;        // Is new by defult
  public action = ADD_TODO;   // Will be an add by default

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public viewCtrl: ViewController) {

    this.todo = this.navParams.get('todo');
    if (!this.todo) {
      this.todo = {
        id: null,
        complete: false,
        text: null
      }
    }
    else {
      this.isNew = false;
      this.action = SAVE_TODO;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save() {
    if (this.isNew) {
      this.todo.id = new Date().toISOString();
    }

    this.viewCtrl.dismiss(      {
        type: this.action,
        payload: this.todo
      });
  }

  remove() {
        this.viewCtrl.dismiss(      {
        type: REMOVE_TODO,
        payload: this.todo
      });
  }

}
