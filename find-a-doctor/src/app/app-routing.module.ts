import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from './doctors/doctors.component'
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'doctors', component: DoctorsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
