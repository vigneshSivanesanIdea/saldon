import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSubpageComponent } from './about-subpage/about-subpage.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, AboutSubpageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
