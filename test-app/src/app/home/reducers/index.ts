import { createFeatureSelector } from '@ngrx/store';
import * as fromHome from './home.reducer';
import * as fromRoot from '../../Core/reducers';



export interface State extends fromRoot.State{
    home: fromHome.HomeState;
}

export const homeReducers = fromHome.reducer;

export const selectHomeState = createFeatureSelector<fromHome.HomeState>('home');