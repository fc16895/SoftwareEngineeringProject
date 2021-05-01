import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {InputService} from './input.service';
import {OutputService} from './output.service';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { BoardsComponent } from './boards/boards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingsComponent } from './ratings/ratings.component';
import { LinksComponent } from './links/links.component';
import { LinkDetailComponent } from './link-detail/link-detail.component';
import { LinkSearchComponent } from './link-search/link-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
MatCardModule,   
 HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
/*     HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ), */
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    BoardsComponent,
    RatingsComponent,
    LinksComponent,
    LinkDetailComponent,
    LinkSearchComponent,
  ],
  providers: [
  InputService,
  OutputService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
