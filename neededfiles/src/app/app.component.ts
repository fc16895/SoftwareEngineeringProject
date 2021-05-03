import { Component, OnInit } from '@angular/core';
import { InputService } from './input.service';
import { OutputService } from './output.service';
import { UpdateService } from './update.service';
import { Link } from './link';

const LinkData =[
{name: 'USA: Law enforcement violated Black Lives Matter protesters’ human rights, documents acts of police violence and excessive Force', imagePath:'/assets/sample1.png',rating: 0},
{name: 'As protests continue over police killings, lawmakers try to add to the list of crimes protesters could face', imagePath:'/assets/sample2.png',rating: 0},
{name: 'Black Lives Matters activists outline policy goals', imagePath:'/assets/sample3.png',rating: 0},
{name: 'Protests In White And Black, And The Different Response Of Law Enforcement', imagePath:'/assets/sample4.png',rating: 0},
{name: 'Republicans Respond to Black Lives Matter with Anti-Protest Bills', imagePath:'/assets/sample5.png',rating: 0},
{name: 'The Double Standard for Policing Capitol Rioters and BLM Protesters', imagePath:'/assets/sample6.png',rating: 0},
{name: 'The United States has its best opportunity in 150 years to belatedly fulfill its promise as a multiracial democracy.', imagePath:'/assets/sample7.png',rating: 0},
{name: 'Republicans push ‘tsunami’ of harsh anti-protest laws after BLM rallies', imagePath:'/assets/sample8.png',rating: 0},
{name: 'The birth of a militia: how an armed group polices Black Lives Matter protests', imagePath:'/assets/sample9.png',rating: 0},
{name: 'Killings by Police Declined after Black Lives Matter Protests', imagePath:'/assets/sample10.png',rating: 0},
{name: 'From Civil Rights to Black Lives Matter', imagePath:'/assets/sample11.png',rating: 0},
{name: 'From the Black Panthers to Black Lives Matter, the ongoing fight to end police violence against black Americans', imagePath:'/assets/sample12.png',rating: 0},
{name: 'Black Lives Matter protests and the Capitol assault: Comparing the police response', imagePath:'/assets/sample13.png',rating: 0},
{name: 'What If The Capital Rioters Were Black? The Contrasting Police Response To Black Lives Matter Vs Trump Mob', imagePath:'/assets/sample14.png',rating: 0},
{name: 'Rioters breached US Capitol security on Wednesday. This was the police response when it was Black protesters on DC streets last year', imagePath:'/assets/sample15.png',rating: 0},
{name: 'False equivalency between Black Lives Matter and Capitol siege: Experts, advocates', imagePath:'/assets/sample16.png',rating: 0},
{name: 'BLACK LIVES MATTER PROTESTS: WHAT’S BEEN ACHIEVED SO FAR', imagePath:'/assets/sample17.png',rating: 0},
{name: 'People Are Contrasting Photos From The Attempted Capitol Coup With Those From Black Lives Matter Protests', imagePath:'/assets/sample18.png',rating: 0},
{name: 'BLACK LIVES MATTER: HOW SHOULD WE RESPOND?', imagePath:'/assets/sample19.png',rating: 0},
{name: 'In 2020, the Black Lives Matter movement shook the world', imagePath:'/assets/sample20.png',rating: 0},
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
