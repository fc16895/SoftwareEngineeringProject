import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';
import { RatingsComponent } from './ratings/ratings.component';
import { LinksComponent } from './links/links.component';
import { LinkDetailComponent } from './link-detail/link-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:name', component: LinkDetailComponent },
  { path: 'links', component: LinksComponent },
  {path: 'ratings', component: RatingsComponent},
  { path: 'boards', component: BoardsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
