import { Routes, RouterModule } from '@angular/router';



import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    
    { 
        path: '', 
        component: PagesComponent,
        children:[
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Graficas1Component },
            { path: '', redirectTo:'/dashboard', pathMatch:'full' },

        ] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } )


