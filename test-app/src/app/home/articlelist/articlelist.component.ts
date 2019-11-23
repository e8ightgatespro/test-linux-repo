import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Article } from 'src/app/Core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {

  @Input() articles: Article[];

  @Output() getArticles = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.handleGetArticles();
  }

  handleGetArticles() {
    this.getArticles.emit();
  }

  getSanitizedImage(unsafeUrl: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(` + unsafeUrl + `)`);
  }

}
