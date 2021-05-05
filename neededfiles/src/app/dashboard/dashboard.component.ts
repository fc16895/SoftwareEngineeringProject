import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
// import { Link } from '../link';
// import { LinkService } from '../link.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  public static toSearch: string = '?';
  constructor(){}
/* links: Link[] = [];

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links.slice(1, 5));
  } */
  public save( s: string ){
      DashboardComponent.toSearch = s;
  }
  public ngOnInit(){}
}
