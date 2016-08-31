import {Payment} from './payment'
import {Router} from '@angular/router';
export class StripeTableComponent {
  payments: Payment[];
  plans: any;

  constructor(private router: Router) {
  }

  choosePayment(payment: Payment) {
    this.router.navigate(['/pay', payment]);
  }
}
