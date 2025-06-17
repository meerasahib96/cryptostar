import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Crypto } from '../../../core/models/crypto';
import {
  selectCryptoData,
  selectCryptoLoading,
} from '../../../store/crypto.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit {
  cryptos$!: Observable<Crypto[]>;
  loading$!: Observable<boolean>;
  searchTerm: string = '';
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.cryptos$ = this.store.select(selectCryptoData);
    this.loading$ = this.store.select(selectCryptoLoading);
    this.cryptos$.subscribe((data) => console.log('Cryptos:', data));
  }
}
