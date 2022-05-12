import { Injectable } from '@angular/core';
import { EntityState, EntityStore,  StoreConfig } from '@datorama/akita';
import { ArticleShort } from 'src/app/entities/models/article';

export interface ArticleSearchState extends EntityState {
   activeArticles: ArticleShort[];
}

export function createInitialState(): ArticleSearchState {
  return {
    activeArticles: []
  };
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'articleSearch' }) 

export class ArticleSearchStore extends EntityStore<ArticleSearchState> {
  constructor() {
    super(createInitialState());
  }
}