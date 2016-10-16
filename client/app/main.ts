import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
console.log('step - 1' + AppModule);
platform.bootstrapModule(AppModule);