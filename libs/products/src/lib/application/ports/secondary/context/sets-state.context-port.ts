import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const SETS_STATE_CONTEXT_PORT = new InjectionToken<SetsStateContextPort>(
  'SETS_STATE_CONTEXT_PORT'
);

export interface SetsStateContextPort {
  setState(state: ProductContext): Observable<void>;
}
