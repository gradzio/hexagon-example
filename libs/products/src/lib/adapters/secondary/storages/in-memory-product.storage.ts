import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { SelectsProductContextContextPort } from '../../../application/ports/secondary/context/selects-product-context.context-port';
import { SetsStateContextPort } from '../../../application/ports/secondary/context/sets-state.context-port';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';

@Injectable()
export class InMemoryProductStorage
  implements SelectsProductContextContextPort, SetsStateContextPort
{
  private _data = new ReplaySubject<ProductContext>();
  select(): Observable<ProductContext> {
    return this._data.asObservable();
  }

  setState(state: ProductContext): Observable<void> {
    return of(this._data.next(state));
  }
}
