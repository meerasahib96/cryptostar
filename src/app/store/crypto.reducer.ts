// import { createReducer, on } from '@ngrx/store';
// import * as CryptoActions from './crypto.actions';
// import { Crypto } from '../core/models/crypto';

// export interface CryptoState {
//   cryptos: Crypto[];
//   loading: boolean;
//   error: any;
// }

// export const initialState: CryptoState = {
//   cryptos: [],
//   loading: false,
//   error: null,
// };

// export const cryptoReducer = createReducer(
//   initialState,
//   on(CryptoActions.loadCryptos, (state) => ({ ...state, loading: true })),
//   on(CryptoActions.loadCryptosSuccess, (state, { cryptos }) => ({
//     ...state,
//     loading: false,
//     cryptos,
//   })),
//   on(CryptoActions.loadCryptosFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))
// );

import { createReducer, on } from '@ngrx/store';
import * as CryptoActions from './crypto.actions';
import { Crypto } from '../core/models/crypto';

export interface CryptoState {
  cryptos: Crypto[];
  loading: boolean;
  error: any;
}

const initialState: CryptoState = {
  cryptos: [],
  loading: false,
  error: null,
};

export const cryptoReducer = createReducer(
  initialState,
  on(CryptoActions.loadCryptos, (state) => ({
    ...state,
    loading: true,
  })),
  // on(CryptoActions.loadCryptosSuccess, (state, { cryptos }) => ({
  //   ...state,
  //   cryptos,
  //   loading: false,
  // })),

  on(CryptoActions.loadCryptosSuccess, (state, { cryptos }) => {
    const favoriteIds = JSON.parse(
      localStorage.getItem('favoriteCryptoIds') || '[]'
    );

    const updatedCryptos = cryptos.map((crypto) => ({
      ...crypto,
      isFavorite: favoriteIds.includes(crypto.id),
    }));

    return {
      ...state,
      cryptos: updatedCryptos,
      loading: false,
    };
  }),
  on(CryptoActions.loadCryptosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  // on(CryptoActions.toggleFavorite, (state, { cryptoId }) => {
  //   const updatedCryptos = state.cryptos.map((crypto) =>
  //     crypto.id === cryptoId
  //       ? { ...crypto, isFavorite: !crypto.isFavorite }
  //       : crypto
  //   );
  //   return { ...state, cryptos: updatedCryptos };
  // })
  on(CryptoActions.toggleFavorite, (state, { cryptoId }) => {
    const updatedCryptos = state.cryptos.map((crypto) =>
      crypto.id === cryptoId
        ? { ...crypto, isFavorite: !crypto.isFavorite }
        : crypto
    );

    const favoriteIds = updatedCryptos
      .filter((c) => c.isFavorite)
      .map((c) => c.id);
    localStorage.setItem('favoriteCryptoIds', JSON.stringify(favoriteIds));

    return {
      ...state,
      cryptos: updatedCryptos,
    };
  })
);
