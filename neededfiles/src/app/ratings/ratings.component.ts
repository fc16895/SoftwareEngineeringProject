import { Component, OnInit } from '@angular/core';
import { Rating } from '../rating';
import { RATINGS } from '../mock-ratings';
import { RatingService } from '../rating.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

ratings: Rating[] = [];

constructor(private ratingService: RatingService) { }


getRatings(): void {
  this.ratingService.getRatings()
      .subscribe(ratings => this.ratings = ratings);
}

  ngOnInit(){
  this.getRatings();
 
 }


add(value: number): void {
  if (!value) { return; }
  this.ratingService.addRating({ value } as Rating)
    .subscribe(rating => {
      this.ratings.push(rating);
    });
}

convertToNumber(string: string): number {

var flag = false;


	for (var i = 0; i < string.length; i++) {
            if (string.charCodeAt(i)<48 || string.charCodeAt(i)>57){
		flag = true;
		}
	}

        if (flag == false){
	return parseInt(string);		
	}
	else{
	return 0;
	}
   }

}
