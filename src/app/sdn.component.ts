import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StripeTableComponent} from './stripe.table.component'

@Component({
  moduleId: module.id,
  templateUrl: 'price.table.html'
})
export class SDNComponent extends StripeTableComponent {
  constructor(router: Router) {
    super(router);
    this.payments = [
      {amount: 330, itemName: 'GaiGai 1-dates package'},
      {amount: 1485, itemName: 'GaiGai 3-dates package'},
      {amount: 1665, itemName: 'GaiGai 5-dates package'},
      {amount: 2205, itemName: 'GaiGai 10-dates package'}
    ];
    this.plans = {
      '3': [
        {amount: 495, itemName: '3 dates package - 10% discount - 3 months (SDN Promo)', count: 3, id: 'sdn-3-3'},
        {amount: 555, itemName: '5 dates package - 10% discount - 3 months (SDN Promo)', count: 3, id: 'sdn-5-3'},
        {amount: 735, itemName: '10 dates package - 10% discount - 3 months (SDN Promo)', count: 3, id: 'sdn-10-3'}
      ],
      '6': [
        {amount: 247.5, itemName: '3 dates package - 10% discount - 6 months (SDN Promo)', count: 6, id: 'sdn-3-6'},
        {amount: 277.5, itemName: '5 dates package - 10% discount - 6 months (SDN Promo)', count: 6, id: 'sdn-5-6'},
        {amount: 367.5, itemName: '10 dates package - 10% discount - 6 months (SDN Promo)', count: 6, id: 'sdn-10-6'}
      ]
    };
  }
}
