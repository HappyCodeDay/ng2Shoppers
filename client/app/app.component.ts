import { Component } from '@angular/core';

@Component({
    selector: 'ng2-cart',
    template: `
                <so-header></so-header>
                <div class="main-container">
                    <router-outlet></router-outlet>
                </div>
            `
})
export class AppComponent{}
