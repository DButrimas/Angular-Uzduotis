import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import {Comment} from '../Comment';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

  comment : Comment = new Comment();

  
  constructor(private route: ActivatedRoute,
    private comentService: CommentService,
    private location : Location) {
     }


    @Output() private commentAdded = new EventEmitter<Comment>();
  
    public sendComment() {
      this.commentAdded.emit(this.comment);
    }

  ngOnInit() {
  }
  onSubmit(form : NgForm) { 
    this.addComment(this.comment);
    this.sendComment();
   //form.reset();
  }

  addComment(comment : Comment){
    const id = +this.route.snapshot.paramMap.get('id');
    this.comentService.addComment(id, comment).subscribe(data => {
      this.comment = data;
    });
    console.log(comment);
  }


}
