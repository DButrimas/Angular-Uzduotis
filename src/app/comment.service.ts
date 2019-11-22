import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  url : string = "https://localhost:44399/api/Comments/byentryid";

  getComments(id : number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.url}/${id}`);
  }
  addComment(id : number, comment : Comment): Observable<Comment>{
    return this.http.post<Comment>(`${this.url}/${id}`,comment);
  }
}
