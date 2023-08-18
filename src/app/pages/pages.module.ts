import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSubpageComponent } from './about-subpage/about-subpage.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutResourcesComponent } from './about-resources/about-resources.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, AboutSubpageComponent, FooterComponent, AboutResourcesComponent, ContactComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
