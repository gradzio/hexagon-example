import { Inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { LoadsProductsCommandPort } from '../ports/primary/command/loads-products.command-port';
import { GetProductListQueryPort } from '../ports/primary/query/get-product-list.query-port';
import {
  GETS_ALL_PRODUCTS_DTO_PORT,
  GetsAllProductsDtoPort,
} from '../ports/secondary/dto/gets-all-products.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT_CONTEXT_PORT,
  SelectsProductContextContextPort,
} from '../ports/secondary/context/selects-product-context.context-port';
import {
  SETS_STATE_CONTEXT_PORT,
  SetsStateContextPort,
} from '../ports/secondary/context/sets-state.context-port';
import { LoadProductsCommand } from '../ports/primary/command/load-products.command';
import { ProductListQuery } from '../ports/primary/query/product-list.query';

@Injectable()
export class ProductsState
  implements LoadsProductsCommandPort, GetProductListQueryPort
{
  constructor(
    @Inject(GETS_ALL_PRODUCTS_DTO_PORT)
    private _getsAllProductsDtoPort: GetsAllProductsDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT_CONTEXT_PORT)
    private _selectsProductContextContextPort: SelectsProductContextContextPort,
    @Inject(SETS_STATE_CONTEXT_PORT)
    private _setsStateContextPort: SetsStateContextPort
  ) {}

  loadProducts(command: LoadProductsCommand): Observable<void> {
    return this._getsAllProductsDtoPort
      .getAll()
      .pipe(
        switchMap((products) =>
          this._setsStateContextPort.setState({ all: [...products] })
        )
      );
  }

  getProductList(): Observable<ProductListQuery> {
    return this._selectsProductContextContextPort
      .select()
      .pipe(
        map(
          (productContext) =>
            new ProductListQuery(productContext.all.map((p) => p.price))
        )
      );
  }
}
