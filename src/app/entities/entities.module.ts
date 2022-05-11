import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ArticleCardComponent
  ]
})
export class EntitiesModule { }
