import { Component } from '@angular/core';
import { DebtConstant } from '../../debt.constant';

@Component({
  selector: 'investments-history',
  templateUrl: '../templates/investments-history.component.html'
})
export class InvestmentsHistoryComponent {
  history = DebtConstant.Payments;
  addNewPayment() {
    
  }
}
