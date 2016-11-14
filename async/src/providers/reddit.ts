import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Reddit provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Reddit {

  constructor(private http: Http) {
  }

     fetchPosts(reddit : string){
        return this.http
            .get(`https://www.reddit.com/r/${reddit.replace(' ', '')}.json`)
            .map(response => response.json());
    }

}
