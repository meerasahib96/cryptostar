// export interface Crypto {
//   id: string;
//   name: string;
//   symbol: string;
//   image: string;
//   current_price: number;
//   price_change_percentage_24h: number;
//   market_cap: number;
//   total_volume: number;
//   isFavorite?: boolean;
// }

// src/app/core/models/crypto.model.ts

/**
 * Data returned in the crypto list endpoint:
 * https://api.coingecko.com/api/v3/coins/markets
 */
export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string; // URL to small logo
  current_price: number; // e.g. 43123.45
  market_cap: number; // e.g. 800000000000
  total_volume: number; // e.g. 35000000000
  price_change_percentage_24h: number; // e.g. -2.34
  isFavorite?: boolean; // your local “starred” flag
}

/**
 * Extended data returned by the coin details endpoint:
 * https://api.coingecko.com/api/v3/coins/{id}
 */
export interface CryptoDetails {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: number;

  market_data: {
    current_price: { [currency: string]: number };
    market_cap: { [currency: string]: number };
    total_volume: { [currency: string]: number };
    high_24h: { [currency: string]: number };
    low_24h: { [currency: string]: number };
    price_change_percentage_24h: number;
  };

  description: {
    en: string;
    [lang: string]: string;
  };

  links: {
    homepage: string[];
    [key: string]: any;
  };
}
