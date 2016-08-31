import {Payment} from './payment'
import {Router} from '@angular/router';
import {StripeService}     from './stripe.service';

export class StripeTableComponent {
  payments: Payment[];
  plans: any;

  constructor(private router: Router, private stripeService: StripeService) {
  }

  choosePayment(payment: Payment) {
    var _this = this;
    StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        payment.tokenId = token.id;
        _this.stripeService.pay(payment).subscribe(result => _this.router.navigate(['/pay', result]));
      }
    }).open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });
  }
}
