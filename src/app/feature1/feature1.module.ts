import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurWorkComponent } from './our-work/our-work.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[OurTeamComponent,OurWorkComponent],
  declarations: [OurTeamComponent, OurWorkComponent]
})
export class Feature1Module { }
