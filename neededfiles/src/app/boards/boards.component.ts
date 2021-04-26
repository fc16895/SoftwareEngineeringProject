import { Component, OnInit } from '@angular/core';
//import {InMemoryDataService} from '../in-memory-data.service';
//import { RatingService } from '../rating.service';
//import {Rating} from '../rating';
import { Link } from '../link';
import { OutputService } from '../output.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})

export class BoardsComponent implements OnInit {

	ImagePath: String;

	links: Link[]=[];
  
  constructor( private outputService: OutputService) {
	  this.ImagePath = '/assets/sample.png';
  }
    //image location
	
	
	
	ngOnInit(): void {
/* 	  console.log('put');
  	this.putLinks(); */
	this.getLinks();
  }
	getLinks(): void {
		this.outputService.getLinks()
		.subscribe(links => this.links=links);
	}


//ratingService.getRatings().subscribe(rating => this.myRatings = rating);




}
