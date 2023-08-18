import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSubpageComponent } from './about-subpage/about-subpage.component';
import { AboutResourcesComponent } from './about-resources/about-resources.component';
import { ContactComponent } from './contact/contact.component';
import { Covid19Component } from './covid19/covid19.component';
import { SalePage2Component } from './sale-page2/sale-page2.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'covid19', component: Covid19Component },
  { path: 'services', component: ServiceComponent },
  { path: 'salepage2', component: SalePage2Component },
  {
    path: 'about',
    children: [
      {
        path: 'president-message',
        component: AboutComponent,
      },
      {
        path: 'company-profile',
        component: AboutSubpageComponent,
      },
      {
        path: 'resources',
        component: AboutResourcesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
