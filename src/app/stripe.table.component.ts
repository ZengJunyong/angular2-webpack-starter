import {Plan} from './model/plan'
import {Router} from '@angular/router';
import {StripeService}     from './stripe.service';

export class StripeTableComponent {
  stripe:any;

  constructor(private router: Router, private stripeService: StripeService) {
  }

  choosePayment(plan: Plan) {
    var _this = this;
    StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      name: 'GaiGai Pte Ltd',
      description: plan.itemName,
      image: 'https://www.letsgaigai.com/gokaikai/assets/images/57.png',
      allowRememberMe: false,
      panelLabel: plan.count ? 'Subscribe' : 'Pay S$' + plan.amount,
      token: function (token: any) {
        plan.tokenId = token.id;
        _this.stripeService.pay(plan).subscribe(result => _this.router.navigate(['/pay', result]));
      }
    }).open();
  }
}
