import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () => import('../features/auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../features/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'testing',
    loadChildren: () => import('../features/testing/testing.module').then( m => m.TestingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
