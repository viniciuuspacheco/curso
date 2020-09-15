import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { Error404Component } from './components/error404/error404.component';
import { AlertsComponent } from './tools/alerts/alerts.component';
import { LoadComponent } from './tools/load/load.component';
import { DividasComponent } from './components/dividas/dividas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { AuthGuard } from './guards/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    Error404Component,
    AlertsComponent,
    LoadComponent,
    DividasComponent,
    BuscarComponent,
    CadastrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
