import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, of, timer } from 'rxjs';
import { CryptoService } from '../core/services/crypto.service'; // Make sure path is correct
import * as CryptoActions from './crypto.actions';
@Injectable()
export class CryptoEffects {
  constructor(
    private actions$: Actions,
    private cryptoService: CryptoService
  ) {}

  loadCryptos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CryptoActions.loadCryptos),
      mergeMap(() =>
        this.cryptoService.getAllCoins().pipe(
          map((cryptos: any[]) =>
            CryptoActions.loadCryptosSuccess({ cryptos })
          ),
          catchError((error) => of(CryptoActions.loadCryptosFailure({ error })))
        )
      )
    )
  );

  autoRefresh$ = createEffect(() =>
    timer(0, 30000).pipe(
      switchMap(() =>
        this.cryptoService.getAllCoins().pipe(
          map((cryptos: any[]) =>
            CryptoActions.loadCryptosSuccess({ cryptos })
          ),
          catchError((error) => of(CryptoActions.loadCryptosFailure({ error })))
        )
      )
    )
  );
}
