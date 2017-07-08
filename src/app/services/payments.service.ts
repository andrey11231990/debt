import { Injectable } from '@angular/core';

@Injectable()
export class PaymentsService {
    total = {
        until: '01.01.2019',
        from: '01.09.2012',
        amount: 75000,
        paid: 10000
    };
    history = [{
        date: '03.07.2017',
        amount: 3000
    }, {
        date: '03.06.2017',
        amount: 7000
    }];
    addPayment(sum, date) {
        this.history.push({
            date: date,
            amount: sum
        });
        this.total.paid += +sum;
    }
    getHistory() {
        return Promise.resolve(this.history);
    }
    getTotalInfo() {
        return Promise.resolve(this.total);
    }
}