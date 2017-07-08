import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './main/components/app.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { InvestmentsHistoryComponent } from './dashboard/components/investments-history.component';
import { TotalInfoComponent } from './dashboard/components/total-info.component';
import { AddPaymentComponent } from './add/components/add-payment.component';

import { PaymentsService } from './services/payments.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvestmentsHistoryComponent,
    TotalInfoComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'addPayment',
        component: AddPaymentComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
