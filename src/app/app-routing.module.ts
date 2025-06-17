import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './features/currency-list/currency-list/currency-list.component';
import { CurrencyDetailsComponent } from './features/currency-details/currency-details/currency-details.component';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { LandingpageComponent } from './features/landingpage/landingpage.component';
const routes: Routes = [
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '', component: LandingpageComponent },
  { path: 'dashboard', component: CurrencyListComponent },
  { path: 'details/:id', component: CurrencyDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
