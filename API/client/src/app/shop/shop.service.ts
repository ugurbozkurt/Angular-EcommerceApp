import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/IPaginatnion';
import { IBrand } from '../shared/models/IBrand';
import { IType } from '../shared/models/IType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/ShopParams';
import { IProduct } from '../shared/models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseurl = 'https://localhost:7201/api/';
  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.brandId)
    {
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId)
    {
      params = params.append('typeId', shopParams.typeId.toString());
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());

    if (shopParams.search)
    {
      params = params.append('search', shopParams.search);
    }
    return this.http
      .get<IPagination>(this.baseurl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }
  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseurl + 'products/' + id);
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseurl + 'products/brands');
  }
  getTypes() {
    return this.http.get<IType[]>(this.baseurl + 'products/types');
  }
}
