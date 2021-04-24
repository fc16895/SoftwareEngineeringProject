import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-search',
  templateUrl: './link-search.component.html',
  styleUrls: [ './link-search.component.css' ]
})
export class LinkSearchComponent implements OnInit {
  links$!: Observable<Link[]>;
  private searchTerms = new Subject<string>();

  constructor(private linkService: LinkService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.links$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.linkService.searchLinks(term)),
    );
  }
}
