import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Product } from '../../app/core/product';

@Injectable()
export class CartService{
    public isCartVisible: boolean = true;

    private payload = new Subject<Product>();
    
    payload$ = this.payload.asObservable();
    
    constructor(){ }
    
    public add_to_cart(product: Product){
        console.log('product added to cart: ' + product.name);
        this.payload.next(product);
    }
}