import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfiguratorComponent } from './configurator/configurator.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ConfiguratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
