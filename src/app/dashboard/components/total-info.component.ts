import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'total-info',
  templateUrl: '../templates/total-info.component.html'
})
export class TotalInfoComponent implements OnInit{
  totalDebt = 0;
  paid = 0;
  started = '';
  until ='';

  constructor(private paymentsService: PaymentsService) {}

  ngOnInit() {
    this.paymentsService.getTotalInfo().then((response) => {
      this.totalDebt = response.amount;
      this.started = response.from;
      this.until = response.until;
      this.paid = response.paid;
    });
  }
}
