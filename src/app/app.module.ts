import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrafismoComponent } from './pages/grafismo/grafismo.component';
import { MetricsComponent } from './pages/grafismo/components/metrics/metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    GrafismoComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
