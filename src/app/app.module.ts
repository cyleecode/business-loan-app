import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PageApplicationComponent } from './pages/page-application/page-application.component';
import { PageOutcomeComponent } from './pages/page-outcome/page-outcome.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, PageLandingComponent, PageApplicationComponent, PageOutcomeComponent, DialogComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
