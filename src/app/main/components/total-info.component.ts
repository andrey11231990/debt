import { Component } from '@angular/core';
import { DebtConstant } from '../../debt.constant';

@Component({
  selector: 'total-info',
  templateUrl: '../templates/total-info.component.html'
})
export class TotalInfoComponent {
  totalDebt = DebtConstant.DebtSum.amount;
  started = DebtConstant.DebtSum.from;
  until = DebtConstant.DebtSum.until;
  paid = DebtConstant.DebtSum.paid;
}
