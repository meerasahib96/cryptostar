import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCryptos } from './store/crypto.actions';
import { Observable } from 'rxjs';
import { Crypto } from './core/models/crypto';
import { selectCryptoData, selectCryptoError } from './store/crypto.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cryptos$!: Observable<Crypto[]>;
  error$!: Observable<any>;

  constructor(private store: Store, public router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadCryptos());
    // this.cryptos$ = this.store.select(selectCryptoData);
    // this.error$ = this.store.select(selectCryptoError);
  }
  isLandingPage(): boolean {
    return this.router.url === '/';
  }
}
