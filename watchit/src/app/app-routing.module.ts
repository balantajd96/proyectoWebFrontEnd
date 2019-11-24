import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JohnwickComponent } from './peliculas/johnwick/johnwick.component';
import { AvengersComponent } from './peliculas/avengers/avengers.component';
import { FrozenComponent } from './peliculas/frozen/frozen.component';
import { JokerComponent } from './peliculas/joker/joker.component';
import { DocsleepComponent } from './peliculas/docsleep/docsleep.component';
import { LambsComponent } from './peliculas/lambs/lambs.component';
import { EquipoComponent } from './equipo/equipo.component';
import { AccionComponent } from './accion/accion.component';
import { Avenger1Component } from './peliculas/avenger1/avenger1.component';
import { Avenger2Component } from './peliculas/avenger2/avenger2.component';
import { SpidermanComponent } from './peliculas/spiderman/spiderman.component';
import { CapitanAmericaComponent } from './peliculas/capitan-america/capitan-america.component';
import { Johnwick1Component } from './peliculas/johnwick1/johnwick1.component';
import { TerrorComponent } from './terror/terror.component';
import { AnimacionComponent } from './animacion/animacion.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'johnwick', component: JohnwickComponent},
  { path: 'johnwick1', component: Johnwick1Component},
  { path: 'avengers', component: AvengersComponent},
  { path: 'frozen', component: FrozenComponent},
  { path: 'joker', component: JokerComponent},
  { path: 'lambs', component: LambsComponent},
  { path: 'docsleep', component: DocsleepComponent},
  { path: 'equipo', component: EquipoComponent},
  { path: 'accion', component: AccionComponent},
  { path: 'avengers1', component: Avenger1Component},
  { path: 'avengers2', component: Avenger2Component},
  { path: 'spiderman', component: SpidermanComponent},
  { path: 'captain-america', component: CapitanAmericaComponent},
  { path: 'terror', component: TerrorComponent},
  { path: 'animacion', component: AnimacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
