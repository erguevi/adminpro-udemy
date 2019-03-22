import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  // @Input() labels: Label[] = ['Download Sales'];
  // @Input() data: MultiDataSet = [
  //   [350, 450, 100]
  // ];
  @Input() doughnutChartLabels: Label[] = ['Download Sales'];
  @Input() doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  @Input() doughnutChartType: ChartType = 'doughnut';

  

  constructor() { }

  ngOnInit() {
  }

}
