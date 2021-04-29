import { Component, OnInit } from '@angular/core';
//import {InMemoryDataService} from '../in-memory-data.service';
//import { RatingService } from '../rating.service';
//import {Rating} from '../rating';
import { Link } from '../link';
import { OutputService } from '../output.service';
import {DashboardComponent } from '../dashboard/dashboard.component'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})

export class BoardsComponent implements OnInit {

	imagePath: String;

	links: Link[]=[];

	average = 0;
  
  constructor( private outputService: OutputService) {





	  this.imagePath = '/assets/StartPhase.png';
  


}
	
	
	
	ngOnInit(): void {
/* 	  console.log('put');
  	this.putLinks(); */
	this.getLinks();
 }



getLinks(): void {
	this.outputService.getLinks(DashboardComponent.toSearch)
		.subscribe(links => {
			this.links=links;
			console.log(this.links);
			console.log(this.links.length);	
	
/*Here below we calculate the average rating (this wasnt done on a separate functtion because for some
 reason the links were not initiliased when using a separate function !) */

	this.average = 0;
        for (var i = 0; i < this.links.length;i++ ){
                this.average = this.average + this.links[i].rating;
                console.log(this.links[i].rating);
        }
        this.average = this.average/this.links.length;
        console.log(this.average);


if (this.average > 0 && this.average <=2){

this.imagePath = '/assets/FirstPhase.png';

}

if (this.average > 2 && this.average <=4.5){

this.imagePath = '/assets/SecondPhase.png';

}

if (this.average > 4.5 && this.average <=6.5){

this.imagePath = '/assets/ThirdPhase.png';

}

if (this.average > 6.5 && this.average <=8){

this.imagePath = '/assets/FourthPhase.png';

}


if (this.average > 8 && this.average <=9){

this.imagePath = '/assets/FifthPhase.png';

}

if (this.average > 9 && this.average <=10){

this.imagePath = '/assets/FinalPhase.png';

}
	});
}




//ratingService.getRatings().subscribe(rating => this.myRatings = rating);




}
