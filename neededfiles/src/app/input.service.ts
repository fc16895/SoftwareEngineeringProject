import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, filter, switchMap } from 'rxjs/operators';
import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  public httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  private REST_API_SERVER = 'http://localhost:9999/newlink';

  constructor(private http: HttpClient) { }

  public input(links: Link): Observable<Link> {console.log('input');
                                               return this.http.post<Link>(this.REST_API_SERVER, links, this.httpOptions);
  }
}
