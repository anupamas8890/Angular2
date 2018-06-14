import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurOfficeComponent } from './our-office/our-office.component';
import { RequestForDemoComponent } from './request-for-demo/request-for-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OurOfficeComponent, RequestForDemoComponent]
})
export class Feature2Module { }
