import { Injectable } from '@angular/core';
import { Entry } from './Entry';
import {HttpClient} from '@angular/common/http';
import { of, Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

   url : string = "https://localhost:44399/api/Entries";
  constructor(private http: HttpClient) { }

  getEntries(): Observable<Entry[]>{
    return this.http.get<Entry[]>(this.url);
  }

  getEntry(id : number): Observable<Entry>{
    return this.http.get<Entry>(`${this.url}/${id}`);
  }

  addEntry(entry : Entry): Observable<Entry>{
    return this.http.post<Entry>(this.url,entry);
  }

  private handleError<T> (operation = 'operation', result?: T) {

  }

}