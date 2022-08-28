import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import {
  HttpProductsServiceModule,
  InMemoryProductStorageModule,
  LoadProductsResolver,
  LoadProductsResolverModule,
  ProductListComponentModule,
  ProductsStateModule,
} from '@products';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ProductListComponentModule,
    ProductsStateModule,
    InMemoryProductStorageModule,
    HttpProductsServiceModule,
    LoadProductsResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        resolve: [LoadProductsResolver],
      },
    ]),
  ],
  declarations: [HomePage],
  providers: [],
  exports: [HomePage],
})
export class HomePageModule {}
