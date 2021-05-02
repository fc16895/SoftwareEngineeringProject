import { Component, OnInit } from '@angular/core';
//import { Rating } from '../rating';
//import { RATINGS } from '../mock-ratings';
//import { RatingService } from '../rating.service';
import { OutputService } from '../output.service';
import { UpdateService } from '../update.service';
import { Link } from '../link';
import {DashboardComponent } from '../dashboard/dashboard.component'

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

links: Link[]=[];
j: number=0;

constructor(private outputService: OutputService,private updateService: UpdateService) { }


getLinks(): void {
	this.outputService.getLinks(DashboardComponent.toSearch)
		.subscribe(links => {
			this.links=links;
			console.log(this.links);
		});
}

  ngOnInit(){
  this.getLinks();
 
 }


add(value: number): void {
	if (!value) { return; }
	if(this.j>=this.links.length){return;}console.log(this.j);console.log(this.links.length);
	var toChange: Link={
		name: this.links[this.j].name,
		imagePath: this.links[this.j].imagePath,
		rating: value
	};
	console.log('tochange'+toChange.name);
	this.updateService.update(toChange as Link)
		.subscribe();
	this.getLinks();
	this.j++;
}

convertToNumber(string: string): number {

	var flag = false;
	if(string.length>2){
		return 0;
	}
	if(string.length==2){
		if(string.charCodeAt(0)!=49 || string.charCodeAt(1)!=48){
			return 0;
		}
		return 10;
	}
	if(string.charCodeAt(0)<49 || string.charCodeAt(0)>57)
		return 0;
	return string.charCodeAt(0)-48;
   }

}
