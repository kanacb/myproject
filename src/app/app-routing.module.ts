import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dash',
        component: DashboardComponent
      },
      {
        path: '**',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
