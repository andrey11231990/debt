import { Component, OnInit } from '@angular/core';

import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'investments-history',
  templateUrl: '../templates/investments-history.component.html'
})
export class InvestmentsHistoryComponent implements OnInit {
  history = [];
  constructor(private paymentsService: PaymentsService) {}

  ngOnInit() {
    this.paymentsService.getHistory().then((response) => this.history = response);
  }
}
