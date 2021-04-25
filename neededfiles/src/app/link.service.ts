import { Injectable } from '@angular/core';
import { Link } from './link';
import { LINKS } from './mock-links';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

private linksUrl = 'api/links';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

getLinks(): Observable<Link[]> {
 return this.http.get<Link[]>(this.linksUrl)
 .pipe(
    tap(_ => this.log('fetched links')),
      catchError(this.handleError<Link[]>('getLinks', []))
    );
}


getLink(name: string): Observable<Link> {
// For now, assume that a link with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const link = LINKS.find(h => h.name === name) as Link;
    this.messageService.add(`LinkService: fetched link name=${name}`);
    return of(link);
}


private log(message: string) {
  this.messageService.add(`linkService: ${message}`);
}



/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}






/* GET links whose name contains search term */
searchLinks(term: string): Observable<Link[]> {
  if (!term.trim()) {
    // if not search term, return empty link array.
    return of([]);
  }
  return this.http.get<Link[]>(`${this.linksUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found links matching "${term}"`) :
       this.log(`no links matching "${term}"`)),
    catchError(this.handleError<Link[]>('searchLinks', []))
  );
}



}
