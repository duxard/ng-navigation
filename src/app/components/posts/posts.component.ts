import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds: false;

  constructor(public postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
    });
  }

  setParams() {
    this.router.navigate(['/posts'], {
      queryParams: {
        search: 'searchParam'
      },
      fragment: 'some-fragment'
    });
  }
}
