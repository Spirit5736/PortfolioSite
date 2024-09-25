import { Routes } from '@angular/router';
import { TestPf1Component } from './test-pf1/test-pf1.component';
import { TestPf2Component } from './test-pf2/test-pf2.component';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'testpf1', component: TestPf1Component },
    { path: 'testpf2', component: TestPf2Component },
];
