import { Component, Input, OnInit } from '@angular/core';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() date: string;
  @Input() content: string;
  @Input() lovetIts: number;

  constructor() {
  }

  ngOnInit() {
  }
  onLoveit(){
    this.lovetIts++;
  }
  onDisLoveit(){
    if (this.lovetIts > 0) {
      this.lovetIts--;
    }

  }
}

