import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*App root */
import { AppComponent } from './app.component';
/*App routing module */
import { AppRoutingModule } from './app-routing.module';
/*Feature modules*/
// import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductModule } from './features/products/product.module';
// import { ProductsListComponent } from './features/products/products-list.component';

@NgModule({
    imports:    [
            BrowserModule,
            ProductModule,
            AppRoutingModule,
            CoreModule
         ],
    declarations:   [ AppComponent ],
    bootstrap:  [ AppComponent ]
})
export class AppModule { 
    constructor(){
        console.log('root module loaded');
    }
}