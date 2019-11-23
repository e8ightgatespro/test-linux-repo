import { createAction, union, props } from '@ngrx/store';
import { Article } from 'src/app/Core';


export const getArticles = createAction(
    '[Home] Get Articles'
);

export const getArticlesSuccess = createAction(
    '[Home] Get Articles Success',
    props<{articles: Article[]}>()
);


export const all = union({
    getArticles,
    getArticlesSuccess
});

export type HomeActionsUnion = typeof all;