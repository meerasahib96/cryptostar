import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingSpinnerComponent } from './shared/loading-spinner/oading-spinner/loading-spinner.component';
import { CurrencyListComponent } from './features/currency-list/currency-list/currency-list.component';
import { CurrencyCardComponent } from './features/currency-card/currency-card/currency-card.component';
import { CurrencyDetailsComponent } from './features/currency-details/currency-details/currency-details.component';
// Material modules
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// NgRx Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Crypto feature store
import { cryptoReducer } from './store/crypto.reducer';
import { CryptoEffects } from './store/crypto.effects';

// Environment config
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CryptosearchPipe } from './shared/pipes/cryptosearch.pipe';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { LandingpageComponent } from './features/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    CurrencyListComponent,
    CurrencyCardComponent,
    CurrencyDetailsComponent,
    FavoritesComponent,
    NavBarComponent,
    CryptosearchPipe,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatIconModule,
    StoreModule.forRoot({ crypto: cryptoReducer }),
    EffectsModule.forRoot([CryptoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    FormsModule,
    NgChartsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
