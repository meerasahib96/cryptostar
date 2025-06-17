import { Pipe, PipeTransform } from '@angular/core';
import { Crypto } from 'app/core/models/crypto';
@Pipe({
  name: 'cryptosearch',
})
export class CryptosearchPipe implements PipeTransform {
  transform(cryptos: Crypto[], searchTerm: string): Crypto[] {
    if (!cryptos || !searchTerm) return cryptos;

    const term = searchTerm.toLowerCase();
    return cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(term) ||
        crypto.symbol.toLowerCase().includes(term)
    );
  }
}
