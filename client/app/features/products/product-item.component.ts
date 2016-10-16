import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { Product } from '../../../app/core/product';
import { CartService } from '../../../app/core/cart.service';

@Component({
    selector: 'product-item',
    templateUrl: '../app/features/products/product-item.component.html'
})
export class ProductItemComponent{
    @Input() product: Product;
    @Input() products: Product[];
    private router: Router;

    get subTotal(): number{
        return this.product.price * this.product.quantity;
        // return 1000;
    }    

    get price(): number{
        return this.product.price;
        // return 1000;
    }    

    get quantity(): number{
        return this.product.quantity;
    }

    set quantity(qty){
        this.product.quantity = qty;
        console.log(qty);
    }

    get itemsCount(){
        return this.products.length;
    }

    constructor(private cartService: CartService){}
    
    go_to_detail(product: Product){
        this.router.navigate(['/detail', product.id]);
    }
    
    add_to_cart(product: Product){
        this.cartService.add_to_cart(product);
    }
}