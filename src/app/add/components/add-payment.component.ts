import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PaymentsService} from '../../services/payments.service';

@Component({
    selector: 'addPayment',
    templateUrl: '../templates/add-payment.component.html'
})
export class AddPaymentComponent {
    sum = 0;
    date = '';

    constructor(private paymentsService: PaymentsService, private router: Router) {}

    addPayment() {
        this.paymentsService.addPayment(this.sum, this.date);
        this.router.navigateByUrl('');
    }
}
