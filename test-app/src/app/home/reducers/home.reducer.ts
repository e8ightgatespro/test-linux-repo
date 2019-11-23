import { RssToJson } from 'src/app/Core/Models/RssToJson';
import { HomeActions } from '../actions';
import { Article } from 'src/app/Core';




export interface HomeState {
    Articles: Article[];
}

export const initialState: HomeState = {
    Articles: null
}

export function reducer(state = initialState, action: HomeActions.HomeActionsUnion): HomeState {
    switch(action.type) {
        
        case HomeActions.getArticlesSuccess.type: {
            return {
                ...state,
                Articles: action.articles
            };
        }

        default: {
            return state;
        }
    }
}



export const selectArticles = (state: HomeState) => state.Articles;