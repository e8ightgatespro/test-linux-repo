import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KotakuService {

constructor(private http: HttpClient) { }

getArticles(): Observable<string> {
  return of('test');
  //this.http.get('https://kotaku.com/rss');
}

}
