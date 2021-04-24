import { Component, OnInit,  Input} from '@angular/core';
import { Link } from '../link';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LinkService } from '../link.service';


@Component({
  selector: 'app-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css']
})
export class LinkDetailComponent implements OnInit {

@Input() link?: Link;

  constructor( private route: ActivatedRoute,
  private linkService: LinkService,
  private location: Location) { }

  ngOnInit(): void {
  this.getLink();
  }

getLink(): void {
  var name = this.route.snapshot.paramMap.get('name');
if (name == null){name = "0"} 
 this.linkService.getLink(name)
    .subscribe(link => this.link = link);
}


goBack(): void {
  this.location.back();
}



}
