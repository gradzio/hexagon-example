import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { GetsAllProductsDtoPort } from '../../../application/ports/secondary/dto/gets-all-products.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { HasDataColllectionResponse } from './has-data-colllection.response';

@Injectable()
export class HttpProductsService implements GetsAllProductsDtoPort {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<Readonly<ProductDTO[]>> {
    // return this._httpClient.get<HasDataColllectionResponse<ProductDTO>>('/products').pipe(map(response => response.data))
    return of([
      { id: '1', price: 100 },
      { id: '2', price: 200 },
    ]);
  }
}
