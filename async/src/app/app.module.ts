import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {Reddit} from '../providers/reddit';
import {RedditListComponent} from '../components/reddit-list/reddit-list';
import {selectedReddit, postsByReddit} from '../reducers/reddit';
import {RedditEffects} from '../effects/reddit-effects';

@NgModule({
  declarations: [
    MyApp,
    RedditListComponent,
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
  providers: [Reddit]
})
export class AppModule {}
