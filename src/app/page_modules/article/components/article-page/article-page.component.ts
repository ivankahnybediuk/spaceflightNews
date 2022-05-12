import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ArticlePageService } from '../../services/article-page.service';
import { FullArticle } from '../../../../entities/models/article';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<void>();
  article: FullArticle = null;
  constructor(
    private articlePageService: ArticlePageService,
  ) { }

  ngOnInit(): void {
    this.articlePageService.fetchArticleDetailes();
    this._subscribeToFullArticle();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _subscribeToFullArticle(): void{
    this.articlePageService.activeArticle$
      .pipe(takeUntil(this._destroy$))
      .subscribe( _ => this.article = _)
  }

}
