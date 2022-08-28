import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadProductsCommand } from './load-products.command';

export const LOADS_PRODUCTS_COMMAND_PORT =
  new InjectionToken<LoadsProductsCommandPort>('LOADS_PRODUCTS_COMMAND_PORT');

export interface LoadsProductsCommandPort {
  loadProducts(command: LoadProductsCommand): Observable<void>;
}
