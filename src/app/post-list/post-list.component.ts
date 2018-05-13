import {Component, Input, OnInit} from '@angular/core';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() mesPosts = [];

  constructor() {
  }

  ngOnInit() {
  }

  debug(){
    console.log(this.mesPosts);
  }

}

