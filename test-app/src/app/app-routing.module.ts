import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'test-comp', component: TestComponent},
  { path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
