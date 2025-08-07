import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'ligue1',
    loadComponent: () => import('./pages/ligue1/ligue1').then((m) => m.Ligue1),
  },
  {
    path: 'seriea',
    loadComponent: () => import('./pages/seriea/seriea').then((m) => m.Seriea),
  },
  {
    path: 'premier-league',
    loadComponent: () =>
      import('./pages/premier-league/premier-league').then(
        (m) => m.PremierLeague
      ),
  },
  {
    path: 'laliga',
    loadComponent: () => import('./pages/laliga/laliga').then((m) => m.Laliga),
  },
  {
    path: 'club/:id',
    loadComponent: () =>
      import('./pages/club-detail/club-detail').then((m) => m.ClubDetail),
  },
  {
    path: 'live',
    loadComponent: () => import('./pages/live/live').then((m) => m.Live),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }