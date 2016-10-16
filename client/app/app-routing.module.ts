import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
// import { ProductRoutingModule } from './features/products/product-routing.module';
import { HeaderComponent } from './core/header.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './core/authentication.service';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CoreModule, CommonModule],
    exports: [RouterModule, HeaderComponent],
    declarations:   [HeaderComponent],
    providers:  [   AuthenticationService ]
})
export class AppRoutingModule {
    constructor(){
        console.log('root routing module loaded');
    }
 }