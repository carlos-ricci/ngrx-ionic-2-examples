import {NgModule} from '@angular/core';
import {IonicApp, IonicModule } from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {DetailsPage} from '../pages/details/details';
import {StoreModule} from '@ngrx/store';
import {todos} from './reducers/todos';
import {visibilityFilter} from './reducers/visibility-filter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({todos: todos, visibilityFilter: visibilityFilter})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  providers: []
})
export class AppModule {}
