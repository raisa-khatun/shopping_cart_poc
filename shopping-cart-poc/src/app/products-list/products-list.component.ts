import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../services/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: IProduct[];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsOverview()
    .subscribe({
      next: products => {
        this.products = products;
      },
      error: e=>this.errorMessage = e
    });
  }

}
