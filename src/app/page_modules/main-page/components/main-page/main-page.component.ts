import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleSearchQuery } from '../../../../core/articleSearch/state/articleSearch.query';
import { Subject, takeUntil } from 'rxjs';
import { ArticleShort } from '../../../../entities/models/article';
import { ArticleSearchService } from '../../../../core/articleSearch/services/article-search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  private readonly _destroy$ = new Subject<void>();
  
  activeArticles: ArticleShort[] = [];

  constructor(
    private articleSearchService: ArticleSearchService,
    private articleSearchQuery: ArticleSearchQuery
  ) { }

  ngOnInit(): void {
    this._subscribeToActiveArticles();
    // this.mainPageService.fetchInitialArticles();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateSearchResults(value: string): void{
    this.articleSearchService.updateSearchResults(value.split(' '))
  }


  private _subscribeToActiveArticles(): void{
    this.articleSearchQuery.activeArticles$
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(_ => this.activeArticles = _)
  }

}
