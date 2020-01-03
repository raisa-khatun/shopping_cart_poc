import { IProduct } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class ProductService{

    private productSource = 'assets/api/products.json';

    constructor(private http: HttpClient){}

    getProductsOverview(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productSource);
    }
}