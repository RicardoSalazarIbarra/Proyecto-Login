import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',}​​,
  {
  path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
  path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  {
  path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'lista', loadChildren: () => import('./paginas/vinos/lista/lista.module').then(m => m.ListaModule) },
  { path: 'agregar', loadChildren: () => import('./paginas/vinos/agregar/agregar.module').then(m => m.AgregarModule) },
  { path: 'detalles', loadChildren: () => import('./paginas/vinos/detalles/detalles.module').then(m => m.DetallesModule) },
  { path: 'editar', loadChildren: () => import('./paginas/vinos/editar/editar.module').then(m => m.EditarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
