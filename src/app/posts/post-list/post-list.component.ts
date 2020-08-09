import { Component } from "@angular/core";

@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
  }

)
export class PostListComponent {
  post = [
    {
title:'1st post',
      content:'hello sir hoe are you'
    },
    {
      title:'2st post',
      content:'hsdfsir hoesdf you'
    },
    {
      title:'3st post',
      content:'sdfir hoe are you'
    },
  ];
}
