import { Injectable } from "@angular/core";
import { Store} from '@ngrx/store';
import * as fromHome from '../reducers'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../../Core/Services/article-service';
import { HomeActions } from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable()
export class HomeEffects {
    constructor(private store$: Store<fromHome.State>,
                private actions$: Actions<HomeActions.HomeActionsUnion>,
                private articleService: ArticleService,
                private sanitizer: DomSanitizer) {}


    getArticles$ = createEffect(() => 
        this.actions$.pipe(
            ofType(HomeActions.getArticles.type),
            switchMap(action => this.articleService.getArticles().pipe(
                map(response => {
                    let articles = response.items;
                    for(let article of articles) {
                        this.sanitizer.bypassSecurityTrustUrl(article.Thumbnail);
                        
                    }
                    return HomeActions.getArticlesSuccess({articles});
                }),
                catchError(error => of(HomeActions.getArticlesSuccess))
            ))
        )
    )            


}
