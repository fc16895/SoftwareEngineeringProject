import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
	
  private REST_API_SERVER = "http://localhost:3000/update";
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public update(links: Link){console.log('update');
    return this.http.post<Link>(this.REST_API_SERVER, links, this.httpOptions)

}
}
