import { NgModule } from '@angular/core';
import { ProductsState } from './products.state';
import { LOADS_PRODUCTS_COMMAND_PORT } from '../ports/primary/command/loads-products.command-port';
import { GET_PRODUCT_LIST_QUERY_PORT } from '../ports/primary/query/get-product-list.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ProductsState,
    { provide: LOADS_PRODUCTS_COMMAND_PORT, useExisting: ProductsState },
    { provide: GET_PRODUCT_LIST_QUERY_PORT, useExisting: ProductsState },
  ],
  exports: [],
})
export class ProductsStateModule {}
