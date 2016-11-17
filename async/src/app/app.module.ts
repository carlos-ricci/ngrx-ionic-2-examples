import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RedditModel} from '../providers/reddit-model';
import {Reddit} from '../providers/reddit';
import {RedditListComponent} from '../components/reddit-list/reddit-list';
import {RefreshButtonComponent} from '../components/refresh-button/refresh-button';
import {RedditSelectComponent} from '../components/reddit-select/reddit-select';
import {selectedReddit, postsByReddit} from '../reducers/reddit';
import {RedditEffects} from '../effects/reddit-effects';

@NgModule({
  declarations: [
    MyApp,
    RedditListComponent,
    RedditSelectComponent,
    RefreshButtonComponent,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({
      selectedReddit: selectedReddit, 
      postsByReddit: postsByReddit}),
    EffectsModule.run(RedditEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [RedditModel, Reddit]
})
export class AppModule {}
