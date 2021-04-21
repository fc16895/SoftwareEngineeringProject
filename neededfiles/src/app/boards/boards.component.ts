import { Component, OnInit } from '@angular/core';
import {InMemoryDataService} from '../in-memory-data.service';
import { RatingService } from '../rating.service';
import {Rating} from '../rating';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

   ImagePath: string;

myRatings: Rating[] = [];
  
  constructor(inmemorydataService: InMemoryDataService, ratingService: RatingService) {
    //image location


ratingService.getRatings().subscribe(rating => this.myRatings = rating);

this.ImagePath = '/assets/sample.png';





}


  ngOnInit(): void {
  }

}
