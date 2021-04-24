import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { LINKS } from '../mock-links';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

links: Link[] = [];

selectedLink?: Link;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
this.getLinks();
  }


onSelect(link: Link): void {
  this.selectedLink = link;
}



getLinks(): void {
  this.linkService.getLinks()
      .subscribe(links => this.links = links);
}







}
