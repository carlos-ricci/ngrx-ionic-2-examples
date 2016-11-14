import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { NavController } from 'ionic-angular';
import {Reddit} from '../../providers/reddit';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public redditPosts$: Observable<any>;

  constructor(public navCtrl: NavController, private reddit:Reddit) {
    this.redditPosts$ = reddit.fetchPosts('JoeInTransition');
  }




}
