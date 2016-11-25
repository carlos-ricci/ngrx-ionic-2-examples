import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { cartReducer }  from '../reducers/cart';
import { productsReducer } from '../reducers/products';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects} from '../effects/shop';
import { ProductListComponent } from '../components/product-list/product-list';
import { ProductItemComponent } from '../components/product-item/product-item';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({
        cart: cartReducer,
        products: productsReducer,
    }),
    EffectsModule.run(ShopEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
