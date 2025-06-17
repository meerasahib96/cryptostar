// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { CryptoState } from './crypto.reducer';

// export const selectCryptoState = createFeatureSelector<CryptoState>('crypto');

// export const selectAllCryptos = createSelector(
//   selectCryptoState,
//   (state) => state.cryptos
// );

// export const selectCryptoLoading = createSelector(
//   selectCryptoState,
//   (state) => state.loading
// );

// export const selectCryptoError = createSelector(
//   selectCryptoState,
//   (state) => state.error
// );

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CryptoState } from './crypto.reducer';

// Step 1: Feature Selector
export const selectCryptoState = createFeatureSelector<CryptoState>('crypto');

// Step 2: Select Crypto Data
export const selectCryptoData = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.cryptos
);

// Step 3: Select Loading State
export const selectCryptoLoading = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.loading
);

// Optional: Error Selector
export const selectCryptoError = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.error
);

export const selectFavorites = createSelector(selectCryptoState, (state) =>
  state.cryptos.filter((crypto) => crypto.isFavorite)
);
