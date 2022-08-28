import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const SELECTS_PRODUCT_CONTEXT_CONTEXT_PORT =
  new InjectionToken<SelectsProductContextContextPort>(
    'SELECTS_PRODUCT_CONTEXT_CONTEXT_PORT'
  );

export interface SelectsProductContextContextPort {
  select(): Observable<ProductContext>;
}
