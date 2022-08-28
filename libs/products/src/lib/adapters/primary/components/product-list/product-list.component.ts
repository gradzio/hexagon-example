import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  GET_PRODUCT_LIST_QUERY_PORT,
  GetProductListQueryPort,
} from '../../../../application/ports/primary/query/get-product-list.query-port';
import { Observable } from 'rxjs';
import { ProductListQuery } from '../../../../application/ports/primary/query/product-list.query';

@Component({
  selector: 'lib-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  list$: Observable<ProductListQuery> =
    this._getProductListQueryPort.getProductList();
  constructor(
    @Inject(GET_PRODUCT_LIST_QUERY_PORT)
    private _getProductListQueryPort: GetProductListQueryPort
  ) {}
}
