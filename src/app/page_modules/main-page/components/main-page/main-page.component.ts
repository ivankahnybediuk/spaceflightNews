import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  article = {
    id: 1,
    title: "The 2020 World's Most Valuable Brands",
    url: "/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Roman_Empire_Trajan_117AD.png",
    summary: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...",
    publishedAt: "June 29th, 2021",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
