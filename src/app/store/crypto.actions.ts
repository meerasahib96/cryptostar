import { createAction, props } from '@ngrx/store';
import { Crypto } from '../core/models/crypto';

export const loadCryptos = createAction('[Crypto] Load Cryptos');

export const loadCryptosSuccess = createAction(
  '[Crypto] Load Cryptos Success',
  props<{ cryptos: Crypto[] }>()
);

export const loadCryptosFailure = createAction(
  '[Crypto] Load Cryptos Failure',
  props<{ error: any }>()
);

export const increment = createAction('[Counter] Increment');
export const toggleFavorite = createAction(
  '[Crypto] Toggle Favorite',
  props<{ cryptoId: string }>()
);
