import { RssToJson } from 'src/app/Core/Models/RssToJson';
import { HomeActions } from '../actions';




export interface HomeState {
    RssToJson: RssToJson
}

export const initialState: HomeState = {
    RssToJson: null
}

export function reducer(state = initialState, action: HomeActions.HomeActionsUnion): HomeState {
    switch(action.type) {
        
    }
}