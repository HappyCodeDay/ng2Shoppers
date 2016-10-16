import { Injectable } from '@angular/core';
import { Product } from '../../app/core/product';
import { CartService } from '../../app/core/cart.service';
import { PRODUCTS } from '../../app/data/mock-products';


@Injectable()
export class ProductService{
    private cartItems: Product[] = [];
    

    constructor(private cartService: CartService){
    }

    getProducts(){
        console.log('product service get products');
        console.log(PRODUCTS.length);
        //  return PRODUCTS;
        return Promise.resolve(PRODUCTS);        
    }
    
    getProduct(id: number){
        return Promise.resolve(this.getProducts().then(products => products.find(product => product.id === id)));
    }
    
    add_to_user_cart(product: Product){
        console.log("adding to cart - 1");
        if(!this.cartItems.find(x => x.id == product.id))
        {
            this.cartItems.push(product);
        }
        else{
            var curQty = this.cartItems.find(x => x.id == product.id).quantity;
            this.cartItems.find(x => x.id == product.id).quantity = curQty+1;
        }
    }

    remove_from_user_cart(product: Product){
        console.log("removing from  cart - 1");
        if(!this.cartItems.find(x => x.id == product.id))
        {
            console.log('item not in the cart');
        }
        else{
            this.cartItems.splice(this.cartItems.findIndex(x => x.id == product.id),1);
        }
    }
     
    get_products_from_user_cart(){
        console.log('items in cart - ' + this.cartItems.length);
        return Promise.resolve(this.cartItems);
    }
}