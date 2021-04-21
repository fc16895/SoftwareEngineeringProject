import { Injectable } from '@angular/core';
import { Rating } from './rating';
import { RATINGS } from './mock-ratings';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

private ratingsUrl = 'api/ratings';  // URL to web api

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


  constructor(  private http: HttpClient) { }





getRatings(): Observable<Rating[]> {
  return this.http.get<Rating[]>(this.ratingsUrl);
}





/** POST: add a new hero to the server */
addRating(rating: Rating): Observable<Rating> {
  return this.http.post<Rating>(this.ratingsUrl, rating, this.httpOptions);
}


}

