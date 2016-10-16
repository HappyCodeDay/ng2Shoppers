import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list.component';

@NgModule({
    imports:    [ RouterModule.forChild([
        {
            path: 'products',
            component: ProductsListComponent
        }
    ])],
    exports:    [ RouterModule  ]
})
export class ProductRoutingModule   {  
    constructor(){
        console.log('product routing module loaded');
    }
 }