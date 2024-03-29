import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { PAGES_ROUTE } from './pages.routes';

//ng2-charts
import { ChartsModule } from 'ng2-charts';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';




@NgModule({
    imports: [
        SharedModule,
        PAGES_ROUTE,
        FormsModule,
        ChartsModule
    ],
    declarations: [ 
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    providers: [],
})
export class PageModule { }
