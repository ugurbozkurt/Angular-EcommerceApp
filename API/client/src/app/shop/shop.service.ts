import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/IPaginatnion';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseurl = 'https://localhost:7201/api/';
  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<IPagination>(this.baseurl + 'products');
  }
}
