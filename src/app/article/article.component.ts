import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  articleId: number = null;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.articleId = parseInt(params['id'], 10);
        console.log(this.articleId);
      }
    });
   console.log(this.router);
  }

}
