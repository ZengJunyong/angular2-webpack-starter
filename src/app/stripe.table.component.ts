import {Payment} from './model/payment'
import {Router} from '@angular/router';
import {StripeService}     from './stripe.service';

export class StripeTableComponent {
  stripe:any;

  constructor(private router: Router, private stripeService: StripeService) {
  }

  choosePayment(payment: Payment) {
    var _this = this;
    StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      name: 'GaiGai Pte Ltd',
      description: payment.itemName,
      image: 'https://www.letsgaigai.com/gokaikai/assets/images/57.png',
      allowRememberMe: false,
      panelLabel: payment.count ? 'Subscribe' : 'Pay S$' + payment.amount,
      token: function (token: any) {
        payment.tokenId = token.id;
        _this.stripeService.pay(payment).subscribe(result => _this.router.navigate(['/pay', result]));
      }
    }).open();
  }
}
