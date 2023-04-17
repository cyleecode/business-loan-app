import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PageApplicationComponent } from './pages/page-application/page-application.component';
import { PageOutcomeComponent } from './pages/page-outcome/page-outcome.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PageLandingComponent, PageApplicationComponent, PageOutcomeComponent, DialogComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
