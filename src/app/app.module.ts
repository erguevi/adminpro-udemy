import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Routes

import { APP_ROUTES } from './app.routes';

//Modulos
import { PageModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
