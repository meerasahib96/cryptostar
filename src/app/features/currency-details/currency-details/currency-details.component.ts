import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../../../core/services/crypto.service';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import {
  ChartConfiguration,
} from 'chart.js';
import { CryptoDetails } from 'app/core/models/crypto';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
})

export class CurrencyDetailsComponent implements OnInit {
  crypto$!: Observable<CryptoDetails>;
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

