import {Routes, RouterModule} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {NoContent} from './no-content';

import {FullComponent} from './full.component';


export const ROUTES: Routes = [
  {path: '', component: FullComponent},
  {
    path: 'full',
    component: FullComponent
  },
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  {path: '**', component: NoContent},
];
