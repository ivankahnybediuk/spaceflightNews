import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EntitiesModule } from '../../entities/entities.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    EntitiesModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
