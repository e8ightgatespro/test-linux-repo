import { createAction, union } from '@ngrx/store';


export const getArticles = createAction(
    '[Home] Get Articles'
);


export const all = union({
    getArticles
});

export type HomeActionsUnion = typeof all;