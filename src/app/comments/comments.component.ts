import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import {Comment} from '../Comment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor(private route: ActivatedRoute,
    private commentService: CommentService,
    private location : Location) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getComments(id).subscribe(data => this.comments = data);
  }


  public onCommentSent(comment: Comment) {
    this.comments.push(comment);
  }
}
