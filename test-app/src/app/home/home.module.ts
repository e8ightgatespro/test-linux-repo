import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './effects/home.effects';
import { homeReducers } from './reducers';

@NgModule({
    declarations: [
       HomeComponent
    ],
    imports: [
        HttpClientModule,
        HomeRoutingModule,
        StoreModule.forFeature('home', homeReducers),
        EffectsModule.forFeature([HomeEffects])
    ],
    providers: [],
    bootstrap: [
       HomeComponent
    ]
 })
 export class HomeModule { }