import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "src/app/components/main/main.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { Error404Component } from "src/app/components/error404/error404.component";
import { DividasComponent } from './components/dividas/dividas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { AuthGuard } from './guards/auth.guard'
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dividas', pathMatch: 'full' },
      { path: 'dividas', component: DividasComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'cadastrar', component: CadastrarComponent }
    ],
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
