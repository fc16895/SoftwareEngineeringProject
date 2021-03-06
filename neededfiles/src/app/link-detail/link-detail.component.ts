import { Component, OnInit,  Input} from '@angular/core';
import { Link } from '../link';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OutputService } from '../output.service';

// import { LinkService } from '../link.service';


@Component({
  selector: 'app-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css']
})
export class LinkDetailComponent implements OnInit {

@Input() public link?: Link;

constructor( private route: ActivatedRoute, private outputService: OutputService, private location: Location) { }

public ngOnInit(): void {
  this.getLink();
  }

public getLink(): void {
    let name = this.route.snapshot.paramMap.get('name');
    if (name === undefined){name = '0';}
    this.outputService.getLinks(name!)
    .subscribe(links => this.link = links[0]);
}


public goBack(): void {
    this.location.back();
}


}
