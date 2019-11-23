import { Component, OnInit } from '@angular/core';
import { KotakuService } from '../Core/Services/kotaku.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private kotakuService: KotakuService) { }

  ngOnInit() {
    this.kotakuService.getArticles().pipe(map(response => {
      console.log(response);
    }));
    
  }

  // This component will be the home page,
  // which will have the full list of Articles
  // organized by timestamp
}
