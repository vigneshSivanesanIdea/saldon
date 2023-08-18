import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSubpageComponent } from './about-subpage/about-subpage.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutResourcesComponent } from './about-resources/about-resources.component';
import { ContactComponent } from './contact/contact.component';
import { Covid19Component } from './covid19/covid19.component';
import { SalePage2Component } from './sale-page2/sale-page2.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, AboutSubpageComponent, FooterComponent, AboutResourcesComponent, ContactComponent, Covid19Component, SalePage2Component, ServiceComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
