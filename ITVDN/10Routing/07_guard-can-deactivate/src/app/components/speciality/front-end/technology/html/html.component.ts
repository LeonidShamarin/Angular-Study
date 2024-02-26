import { Component, OnInit } from '@angular/core';
import { FrontEndServerService } from '../../../shared/front-end-server.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],
})
export class HtmlComponent implements OnInit {
  constructor(
    private frontServer: FrontEndServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  htmlTags: any;
  bgPairsTag: any;
  fragment: any;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // console.log(params)
      this.bgPairsTag = params['pairs'];
    });
    this.activatedRoute.fragment.subscribe((frag: any) => {
      // console.log(frag)
      this.fragment = frag;
    });

    this.frontServer.getTags().subscribe((data: any) => (this.htmlTags = data));
    // console.log(this.activatedRoute)
  }

  typeElement(tag: { type: any; }) {
    if (tag.type === this.fragment) {
      return 'lightgreen';
    }
    return '';
  }

  inlineTypeFragment() {
    this.router.navigate(['/front-end', 'html'], {
      fragment: 'inline',
    });
  }
  notPairedTagsMethod() {
    this.router.navigate(['/front-end', 'html'], {
      queryParams: { pairs: false },
    });
  }

  addBgForTag(tag: { paired: any; }) {
    // console.log(this.bgPairsTag)
    if (`${tag.paired}` === this.bgPairsTag) {
      return true;
    }
    return false;
  }

  isSelected(tag: { id: any; }) {
    return this.activatedRoute.snapshot.params['id'] === tag.id;
  }
}
