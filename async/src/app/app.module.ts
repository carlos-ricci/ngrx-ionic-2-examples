import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Reddit} from '../providers/reddit';
import {RedditListComponent} from '../components/reddit-list/reddit-list';

@NgModule({
  declarations: [
    MyApp,
    RedditListComponent,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [Reddit]
})
export class AppModule {}
