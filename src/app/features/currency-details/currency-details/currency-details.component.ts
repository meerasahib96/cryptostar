import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../../../core/services/crypto.service';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { CryptoDetails } from 'app/core/models/crypto';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
})

// export class CurrencyDetailsComponent implements OnInit {
//   crypto$!: Observable<CryptoDetails>;
//   selectedDays = 7;
//   private coinId = '';

//   // Chart.js settings
//   chartType: 'line' = 'line';
//   chartData!: ChartConfiguration<'line'>['data'];
//   chartOptions: ChartConfiguration<'line'>['options'] = {
//     responsive: true,
//     plugins: { legend: { display: false } },
//     scales: { x: {}, y: { beginAtZero: false } },
//   };

//   constructor(
//     private route: ActivatedRoute,
//     private cryptoService: CryptoService
//   ) {}

//   ngOnInit(): void {
//     // Load details & initial chart when id changes
//     this.crypto$ = this.route.paramMap.pipe(
//       switchMap((params) => {
//         this.coinId = params.get('id')!;
//         // fetch details
//         const details$ = this.cryptoService.getCoinById(this.coinId);
//         // fetch chart
//         this.fetchChart(this.selectedDays);
//         return details$;
//       })
//     );
//   }

//   fetchChart(days: number): void {
//     this.cryptoService
//       .getMarketChart(this.coinId, 'usd', days)
//       .subscribe((chart) => {
//         const prices = chart.prices.map((p) => p[1]);
//         const labels = chart.prices.map((p) =>
//           new Date(p[0]).toLocaleDateString()
//         );
//         this.chartData = {
//           labels,
//           datasets: [
//             {
//               data: prices,
//               label: 'Price (USD)',
//               borderColor: '#3f51b5',
//               fill: false,
//             },
//           ],
//         };
//       });
//   }

//   onDaysChange(days: number): void {
//     this.selectedDays = days;
//     this.fetchChart(days);
//   }
// }
export class CurrencyDetailsComponent implements OnInit {
  crypto$!: Observable<CryptoDetails>;

  // Bar chart settings
  chartType: 'bar' = 'bar';
  chartData!: ChartConfiguration<'bar'>['data'];
  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
    },
  };

  constructor(
    private route: ActivatedRoute,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    this.crypto$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id')!;
        // fetch details
        const details$ = this.cryptoService.getCoinById(id);
        // also fetch and build the chart once
        details$.subscribe((crypto) => this.buildChart(crypto));
        return details$;
      })
    );
  }

  private buildChart(crypto: CryptoDetails) {
    const current = crypto.market_data.current_price['usd'];
    const high24 = crypto.market_data.high_24h['usd'];
    const low24 = crypto.market_data.low_24h['usd'];

    this.chartData = {
      labels: ['Current Price', '24h High', '24h Low'],
      datasets: [
        {
          data: [current, high24, low24],
          backgroundColor: ['#3f51b5', '#4caf50', '#f44336'],
        },
      ],
    };
  }
}
// export class CurrencyDetailsComponent implements OnInit {
//   crypto: any;
//   chartData!: ChartConfiguration<'line'>['data'];
//   chartOptions: ChartOptions<'line'> = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       x: { title: { display: true, text: 'Date' } },
//       y: { title: { display: true, text: 'Price (USD)' } },
//     },
//   };
//   chartType: 'line' = 'line';

//   constructor(
//     private route: ActivatedRoute,
//     private cryptoService: CryptoService
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.cryptoService.getCoinById(id).subscribe((data) => {
//         this.crypto = data;
//       });

//       this.cryptoService.getMarketChart(id).subscribe((chartData) => {
//         const labels = chartData.prices.map((p: number[]) =>
//           new Date(p[0]).toLocaleDateString('en-US', {
//             month: 'short',
//             day: 'numeric',
//           })
//         );
//         const prices = chartData.prices.map((p: number[]) => p[1]);

//         this.chartData = {
//           labels,
//           datasets: [
//             {
//               data: prices,
//               label: 'Price (USD)',
//               borderColor: '#42A5F5',
//               backgroundColor: 'rgba(66, 165, 245, 0.2)',
//               fill: true,
//               tension: 0.4,
//               pointRadius: 2,
//             },
//           ],
//         };
//       });
//     }
//   }
// }
