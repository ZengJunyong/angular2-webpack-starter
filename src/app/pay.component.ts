import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Plan} from './plan'
import {StripeService}     from './stripe.service';

@Component({
  moduleId: module.id,
  templateUrl: 'pay.component.html',
  providers: [StripeService]
})
export class PayComponent implements OnInit, OnDestroy {
  sub: any;
  plan: Plan;

  card = {cardNumber: '4242424242424242', expMM: 12, expYY: 2017, CVC: '123'};

  progress: any; // 0 fail, 1 success, 2 progressing

  constructor(private route: ActivatedRoute, private stripeService: StripeService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(data => {
      this.plan = <Plan>data;
    });
  }

  submit() {
    this.progress = 2;
    let obj: any = this.card; // any better method to join 2 objects in ng2?
    obj.itemName = this.plan.itemName;
    obj.amount = this.plan.amount;
    obj.count = this.plan.count;
    obj.id = this.plan.id;
    this.stripeService.pay(obj).subscribe(result => this.progress = result.success);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
