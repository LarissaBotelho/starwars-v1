import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { PlanetsComponent } from './planets/planets.component';
import { ConsultaComponent } from './consulta/consulta.component';

const children: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'consulta', component: ConsultaComponent }
];

const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'starwars'
  },
  {
    path: 'starwars',
    component: ShellComponent,
    children
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
