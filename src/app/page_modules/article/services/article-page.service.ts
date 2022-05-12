import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FullArticle, IFullArticle } from '../../../entities/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlePageService {

  private articleUrl: string = 'https://api.spaceflightnewsapi.net/v3/articles/';
  private _activeArticle$: BehaviorSubject<FullArticle> = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  get activeArticle$(): Observable<FullArticle>{
    return this._activeArticle$.asObservable();
  }
  
  fetchArticleDetailes(): void{
    this.http.get(this.articleUrl + this.getArticleId())
    .subscribe(resp => this._activeArticle$.next(new FullArticle(resp as IFullArticle)))
  }

  getArticleId(): string{
    let url = this.router.url;
    return url.split('/article/').join('')
  }
}
