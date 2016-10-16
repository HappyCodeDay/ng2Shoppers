import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductItemComponent } from './product-item.component';
import { ProductService } from '../../core/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/cart.service';

@NgModule({
    imports:    [ ProductRoutingModule, CommonModule ],
    declarations:   [ ProductsListComponent, ProductItemComponent ],
    exports:    [ ProductsListComponent, ProductItemComponent ],
    providers:  [ ProductService, CartService ]
})
export class ProductModule  { 
    constructor(){
        console.log('product module loaded');
    }
  }