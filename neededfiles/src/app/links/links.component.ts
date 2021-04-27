import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
//import { LINKS } from '../mock-links';
//import { LinkService } from '../link.service';
import { InputService } from '../input.service';
import { OutputService } from '../output.service';
import {DashboardComponent } from '../dashboard/dashboard.component'

/* const LinkData: Link[] =[
{name: 'BLM protest does this', imagePath:'/assets/sample.png'},
{name: 'BLM protest does that', imagePath:'/assets/sample.png'},
{name: 'BLM protest also does this other thing', imagePath:'/assets/sample.png'}
]; */

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {

links: Link[] = [];
selectedLink?: Link;
//  constructor(private linkService: LinkService) { }
  constructor(private inputService: InputService,private outputService: OutputService) { 
	}

  ngOnInit(): void {
/* 	  console.log('put');
  	this.putLinks(); */
	this.getLinks();console.log(DashboardComponent.toSearch);
  }


onSelect(link: Link): void {
  this.selectedLink = link;
}

/* putLinks(): void {
	var j: number;
	for(j=0;j<LinkData.length;j++){
		this.inputService.input(LinkData[j]).subscribe();
    }
} */

//getLinks(): void {
//  this.linkService.getLinks()
//      .subscribe(links => this.links = links);
//}

getLinks(): void {
	this.outputService.getLinks(DashboardComponent.toSearch)
		.subscribe(links => {
			this.links=links;
			console.log(this.links);
		});
}






}
