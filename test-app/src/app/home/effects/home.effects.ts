import { Injectable } from "@angular/core";
import { Store} from '@ngrx/store';
import * as fromHome from '../reducers'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from 'src/app/Core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HomeActions } from '../actions';


@Injectable()
export class HomeEffects {
    constructor(private store$: Store<fromHome.State>,
                private actions$: Actions<HomeActions.HomeActionsUnion>,
                private articleService: ArticleService) {}
}
