import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Core/Services/kotaku.service';
import { map } from 'rxjs/operators';
import { Article } from '../Core/Models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    
  }

  // This component will be the home page,
  // which will have the full list of Articles
  // organized by timestamp
}
