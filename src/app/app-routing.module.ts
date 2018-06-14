import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const routes : Routes= [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path: 'home', component:HomeComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: PageNotFoundComponent },
  {path:'', redirectTo:'/home', pathMatch:'full'}
  
 
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
