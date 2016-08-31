import {Routes, RouterModule} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {NoContent} from './no-content';

import {FullComponent} from './full.component';
import {Per10Component} from './per10.component';
import {SDNComponent}       from './sdn.component';
import {PayComponent} from './pay.component';

export const ROUTES: Routes = [
  {path: '', component: FullComponent},
  {
    path: 'full',
    component: FullComponent
  }, {
    path: 'per10',
    component: Per10Component
  }, {
    path: 'sdn',
    component: SDNComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  {path: '**', component: NoContent},
];
