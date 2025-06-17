// favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Crypto } from '../../core/models/crypto';
import { selectFavorites } from '../../store/crypto.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites$!: Observable<Crypto[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favorites$ = this.store.select(selectFavorites);
  }
}
