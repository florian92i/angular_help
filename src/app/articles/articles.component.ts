import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  myArticles: any = [
    {
      id: 1,
      name: 'article test home ',
      date: '2018-09-19',
      new: true
    },
    {
      id: 2,
      name: 'article test  home 2',
      date: '2018-09-19',
      new: true
    },
    {
      id: 3,
      name: 'article test  home 3',
      date: '2018-09-19',
      new: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
