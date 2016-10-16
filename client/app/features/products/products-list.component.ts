import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../app/core/product';
import { ProductService } from '../../../app/core/product.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: "prod-list",
    templateUrl: "../app/features/products/products-list.component.html",
    styleUrls: ["../app/features/products/product-list.component.css"],
})
export class ProductsListComponent implements OnInit, OnDestroy{
    products: Product[];

    constructor(private productService: ProductService){

    }

    ngOnInit(){
         this.getProducts()
                        .then(products => this.products = products);
    }

    ngOnDestroy(){

    }

    getProducts(){
        return this.productService.getProducts();
    }
    
}