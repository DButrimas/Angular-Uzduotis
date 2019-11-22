import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryAddComponent,
    EntryDetailsComponent,
    CommentsComponent,
    CommentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
