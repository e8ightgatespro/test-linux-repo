import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component'
import { CoreModule } from './Core/core.module';

@NgModule({
   declarations: [
      AppComponent,
      TestComponent,
   ],
   imports: [
      BrowserModule,
      CoreModule,
      AppRoutingModule,
   ],
   providers: [],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
