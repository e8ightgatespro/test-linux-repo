import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Article } from 'src/app/Core';


@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {

  @Input() articles: Article[];

  @Output() getArticles: EventEmitter<{any}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.handleGetArticles();
  }

  handleGetArticles() {
    this.getArticles.emit();
  }

}
