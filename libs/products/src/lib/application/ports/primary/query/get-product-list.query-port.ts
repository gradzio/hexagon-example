import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListQuery } from './product-list.query';

export const GET_PRODUCT_LIST_QUERY_PORT =
  new InjectionToken<GetProductListQueryPort>('GET_PRODUCT_LIST_QUERY_PORT');

export interface GetProductListQueryPort {
  getProductList(): Observable<Readonly<ProductListQuery>>;
}
