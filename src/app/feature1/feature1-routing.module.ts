import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurWorkComponent } from './our-work/our-work.component';

const routes : Routes=[
  { path: '', component: OurTeamComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'our-team', component: OurTeamComponent }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports:[],
  declarations: []
})
export class Feature1RoutingModule { }
