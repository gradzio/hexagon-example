import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  LOADS_PRODUCTS_COMMAND_PORT,
  LoadsProductsCommandPort,
} from '../../../../application/ports/primary/command/loads-products.command-port';
import { LoadProductsCommand } from '../../../../application/ports/primary/command/load-products.command';

@Injectable()
export class LoadProductsResolver implements Resolve<void> {
  constructor(
    @Inject(LOADS_PRODUCTS_COMMAND_PORT)
    private _loadsProductsCommandPort: LoadsProductsCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this._loadsProductsCommandPort.loadProducts(
      new LoadProductsCommand()
    );
  }
}
