import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './modulos/administracion/personas/crear-persona/crear-persona.component';
import { BuscarPersonaComponent } from './modulos/administracion/personas/buscar-persona/buscar-persona.component';
import { EditarPersonaComponent } from './modulos/administracion/personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './modulos/administracion/personas/eliminar-persona/eliminar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    BuscarPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
