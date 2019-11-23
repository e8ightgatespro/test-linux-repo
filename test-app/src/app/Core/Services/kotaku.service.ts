import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RssToJson } from '../Models/RssToJson';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor(private http: HttpClient) { }

getArticles(): Observable<RssToJson> {
  let url = encodeURI('https://kotaku.com/rss');
  return this.http.get<RssToJson>('https://api.rss2json.com/v1/api.json?rss_url=' + url);
}

}
