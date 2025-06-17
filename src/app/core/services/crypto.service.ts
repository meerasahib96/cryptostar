import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { CryptoDetails } from '../models/crypto';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,tron,polkadot,litecoin&order=market_cap_desc&per_page=10&page=1';
  private readonly API = 'https://api.coingecko.com/api/v3';
  constructor(private http: HttpClient) {}

  getAllCoins(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(this.apiUrl).pipe(delay(5000));
  }
  getCoinById(id: string): Observable<CryptoDetails> {
    return this.http.get<CryptoDetails>(`${this.API}/coins/${id}`);
  }

  /** Fetch price history **/
  getMarketChart(id: string): Observable<any> {
    return this.http.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
    );
  }
}
