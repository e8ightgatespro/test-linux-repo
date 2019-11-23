import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';


const homeRoutes: Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
