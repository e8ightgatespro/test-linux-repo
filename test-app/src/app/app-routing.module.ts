import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeModule } from './home/home.module';


const appRoutes: Routes = [
  { path: 'test-comp', component: TestComponent},
  { path: '**', loadChildren:() => import('./home').then(m => m.HomeModule)  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
