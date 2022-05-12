import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { EntitiesModule } from '../../entities/entities.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ArticlePageComponent
  ],
  imports: [
    CommonModule,
    EntitiesModule,
    RouterModule,
    MatIconModule
  ]
})
export class ArticleModule { }
