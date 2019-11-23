import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticleService } from '../Core/Services/article-service';
import { Observable } from 'rxjs';
import { Article } from '../Core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../Core/reducers';
import * as fromHome from '../home/reducers';
import { HomeActions } from './actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.articles$ = this.store$.pipe(select(fromHome.selectArticles));
  }

  handleGetArticles() {
    this.store$.dispatch(HomeActions.getArticles());
  }

  // This component will be the home page,
  // which will have the full list of Articles
  // organized by timestamp
}
