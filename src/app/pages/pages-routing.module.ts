import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSubpageComponent } from './about-subpage/about-subpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',
  children: [
    {
      path: '',
      component: AboutComponent,
    },
    {
      path: 'president-message',
      component: AboutComponent,
    },
    {
      path: 'company-profile',
      component: AboutSubpageComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
