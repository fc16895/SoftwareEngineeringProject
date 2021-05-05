import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  public httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  private REST_API_SERVER = 'http://localhost:9999/getall';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public getLinks(name: String): Observable<Link[]>{
    return this.http.get<Link[]>(this.REST_API_SERVER + '/search?name=' + name, this.httpOptions)
    .pipe(
    tap(_ => this.log('fetched links')),
    catchError(this.handleError<Link[]>('getLinks', []))
    );

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

}
