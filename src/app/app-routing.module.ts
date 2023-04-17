import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PageApplicationComponent } from './pages/page-application/page-application.component';
import { PageOutcomeComponent } from './pages/page-outcome/page-outcome.component';

const routes: Routes = [
  {
    path: 'start',
    component: PageLandingComponent,
  },
  {
    path: 'application/:appid',
    component: PageApplicationComponent,
  },
  {
    path: 'outcome',
    component: PageOutcomeComponent,
  },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
