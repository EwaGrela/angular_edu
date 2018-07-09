import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from './doctors/doctors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DoctorDetailComponent} from './doctor-detail/doctor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {path: 'detail/:id', component: DoctorDetailComponent },
    { path: 'doctors', component: DoctorsComponent },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
