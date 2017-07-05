import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main/components/app.component';
import { InvestmentsHistoryComponent } from './main/components/investments-history.component';
import { TotalInfoComponent } from './main/components/total-info.component';

@NgModule({
  declarations: [
    AppComponent, InvestmentsHistoryComponent, TotalInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
