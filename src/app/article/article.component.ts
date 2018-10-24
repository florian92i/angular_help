import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  affichage: any;
  articleId: number = null;
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
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.articleId = parseInt(params['id'], 10);
        this.affichage = this.myArticles.find(hero => hero.id === this.articleId);
      }
    });
   console.log(this.router);
  }

}
