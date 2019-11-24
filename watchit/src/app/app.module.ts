import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Character from './Characters';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JohnwickComponent } from './peliculas/johnwick/johnwick.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvengersComponent } from './peliculas/avengers/avengers.component';
import { FrozenComponent } from './peliculas/frozen/frozen.component';
import { JokerComponent } from './peliculas/joker/joker.component';
import { LambsComponent } from './peliculas/lambs/lambs.component';
import { DocsleepComponent } from './peliculas/docsleep/docsleep.component';
import { Johnwick1Component } from './peliculas/johnwick1/johnwick1.component';
import { AccionComponent } from './accion/accion.component';
import { TerrorComponent } from './terror/terror.component';
import { AnimacionComponent } from './animacion/animacion.component';
import { EquipoComponent } from './equipo/equipo.component';
import { Avenger1Component } from './peliculas/avenger1/avenger1.component';
import { Avenger2Component } from './peliculas/avenger2/avenger2.component';
import { CapitanAmericaComponent } from './peliculas/capitan-america/capitan-america.component';
import { SpidermanComponent } from './peliculas/spiderman/spiderman.component';

@NgModule({
  declarations: [
    AppComponent,
    JohnwickComponent,
    DashboardComponent,
    AvengersComponent,
    FrozenComponent,
    JokerComponent,
    LambsComponent,
    DocsleepComponent,
    Johnwick1Component,
    AccionComponent,
    TerrorComponent,
    AnimacionComponent,
    EquipoComponent,
    Avenger1Component,
    Avenger2Component,
    CapitanAmericaComponent,
    SpidermanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
