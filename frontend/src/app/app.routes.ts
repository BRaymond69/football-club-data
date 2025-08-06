import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Laliga } from './pages/laliga/laliga';
import { Ligue1 } from './pages/ligue1/ligue1';
import { PremierLeague } from './pages/premier-league/premier-league';
import { Seriea } from './pages/seriea/seriea';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'ligue1', component: Ligue1},
  { path: 'seriea', component: Seriea},
  { path: 'premier-league',  component: PremierLeague },
  { path: 'laliga', component: Laliga},
  { path: 'club/:id', 
    loadComponent: () => import('./pages/club-detail/club-detail').then(m => m.ClubDetail)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }