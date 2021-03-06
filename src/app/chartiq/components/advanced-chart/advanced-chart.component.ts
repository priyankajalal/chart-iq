import { Component, Input, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

// Defines available Chartiq library resources for use in ChartService
import { config } from './resources'; // ChartIQ library resources
import { ChartService } from '../../chart.service'; // Angular service for CIQ resources

@Component({
	selector: 'cq-advanced-chart',
	templateUrl: './advanced-chart.component.html',
	styleUrls: ['./advanced-chart.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [ChartService]
})
export class AdvancedChartComponent implements OnInit {
	@Input() symbol = '';
	@Input() chartId = '_advanced-chart';
	@ViewChild('contextContainer', { static: true }) contextContainer: ElementRef;

	constructor(public chartService: ChartService) {}

	ngOnInit() {
		const container = this.contextContainer.nativeElement;

		// Customize configuration prior to passing it as parameter chart creation
		config.initialSymbol = this.symbol || {
			symbol: "AAPL",
			name: "Apple Inc",
			exchDisp: "NASDAQ"
		};
		// config.quoteFeeds[0].behavior.refreshInterval = 0;

		// Enable any extra addOns here before creating the chart
		// const { tooltip, continuousZoom, outliers } = config.addOns;
		// const activeAddOns = { continuousZoom, outliers, tooltip };
		// config.enabledAddOns = Object.assign(activeAddOns, config.enabledAddOns);
		config.chartId = this.chartId;

		this.chartService.createChartAndUI({ container, config });  
	}
}
