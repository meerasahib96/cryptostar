import { Component, Input } from '@angular/core';
import { Crypto } from '../../../core/models/crypto';
import { Store } from '@ngrx/store';
import { toggleFavorite } from 'app/store/crypto.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent {
  @Input() crypto!: Crypto;
  isFavorite: boolean = false;
  constructor(private store: Store, private router: Router) {}

  goToDetails() {
    this.router.navigate(['/details', this.crypto.id]);
  }
  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    console.log('Toggling favorite for:', this.crypto.id);
    this.store.dispatch(toggleFavorite({ cryptoId: this.crypto.id }));
  }
}
