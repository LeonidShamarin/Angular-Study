import { FrontEndServerService } from '../../../shared/front-end-server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descr-article',
  templateUrl: './descr-article.component.html',
  styleUrls: ['./descr-article.component.css'],
})
export class DescrArticleComponent implements OnInit {
  constructor(
    private frontServer: FrontEndServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  tagHTML: any;

  ngOnInit(): void {
    let id;
    this.activatedRoute.params.subscribe((res: { [x: string]: any; }) => {
      console.log(res);
      id = res['article-tag'];
      this.frontServer.getTag(id).subscribe((data: any) => {
        console.log(data);
        this.tagHTML = data;
      });
    });
  }

  visited(html: { id: any; }) {
    // this.router.navigate(["/front-end/html"]);
    this.router.navigate(['/front-end/html', { id: html.id, test: 'text' }]);
  }
}
