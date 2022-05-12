import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { ArticleSearchState, ArticleSearchStore } from './articleSearch.store';
import { ArticleSearchService } from '../services/article-search.service';
import { Observable, take} from 'rxjs';
import { ArticleShort } from '../../../entities/models/article';


@Injectable({
  providedIn: 'root'
})



export class ArticleSearchQuery extends QueryEntity<ArticleSearchState> {

    constructor(
        protected store: ArticleSearchStore,
        private articleSearchService: ArticleSearchService) {
    super(store);
    }
    
    private _activeArticles$ = this.select(_ => _.activeArticles)

    get activeArticles$(): Observable<ArticleShort[]>{
        this._activeArticles$.pipe(take(1)).subscribe(articles => {
            if (!articles.length) {
                this.articleSearchService.fetchInitialArticles()
            }
        }) 
        return this._activeArticles$
    }

}

