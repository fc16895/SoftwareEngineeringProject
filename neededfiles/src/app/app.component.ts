import { Component, OnInit } from '@angular/core';
import { InputService } from './input.service';
import { OutputService } from './output.service';
import { UpdateService } from './update.service';
import { Link } from './link';

const LinkData =[
	{name: 'BLM protest does this', imagePath:'/assets/sample.png',rating: 0},
	{name: 'BLM protest does that', imagePath:'/assets/sample.png',rating: 0},
	{name: 'BLM protest also does this other thing', imagePath:'/assets/sample.png',rating: 0}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 constructor(private inputService: InputService,private updateService: UpdateService) { 
	}

  ngOnInit(): void {
  	this.putLinks();
  }
  title = 'CauseVisualiser';
  putLinks(): void {
	var j;
	for(j=0;j<LinkData.length;j++){
		this.inputService.input(LinkData[j]).subscribe();
		this.updateService.update(LinkData[j]).subscribe();
	}
  }
}
