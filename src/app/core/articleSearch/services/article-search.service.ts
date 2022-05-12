import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticleShort, ArticleShort } from 'src/app/entities/models/article';
import { ArticleSearchStore } from '../state/articleSearch.store';

@Injectable({
  providedIn: 'root'
})
export class ArticleSearchService {

    constructor(
    private http: HttpClient,
    private articleSearchStore: ArticleSearchStore
  ) { }

  private initialResultsUrl: string = "https://api.spaceflightnewsapi.net/v3/articles?_limit=100";
  private getSearchResultsUrl: string = "https://api.spaceflightnewsapi.net/v3/articles?_limit=100";

  fetchInitialArticles(): void { 
    this.http.get(this.initialResultsUrl)
      .subscribe((result: IArticleShort[]) => {
        this.articleSearchStore.update(
          { activeArticles: result.map(_ => new ArticleShort(_)) }
        );
        this.articleSearchStore.setHasCache(true);

      }
    )
  }



  updateSearchResults(keywords: string[]): void{
    let baseUrl = this.getSearchResultsUrl
      + '&title_contains=' + this.makeRequestParamsForTitleFilter(keywords)
      + '&summary_contains=' +this.makeRequestParamsForDescriptionFilter(keywords);
    this.http.get(baseUrl)
    .subscribe((result: IArticleShort[]) => {
        this.articleSearchStore.update(
          {activeArticles: result.map(_ => new ArticleShort(_ , keywords))}
        )
    }
    )
  }

  makeRequestParamsForTitleFilter(keywords: string[]): string{
    return keywords.reduce(((prev, curr) => prev + '&title_contains=' + curr))
  }

   makeRequestParamsForDescriptionFilter(keywords: string[]): string{
    return keywords.reduce(((prev, curr) => prev + '&summary_contains=' + curr))
  }





}
