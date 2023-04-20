import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { InicioLoginComponent } from './vistas/inicio-login/inicio-login.component';
import { TablaParqueComponent } from './vistas/tabla-parque/tabla-parque.component';
import { AgregarParqueComponent } from './vistas/agregar-parque/agregar-parque.component';
import { ModiParqueComponent } from './vistas/modi-parque/modi-parque.component';
import { DetallesParqueComponent } from './vistas/detalles-parque/detalles-parque.component';
import { TablaVisitanteComponent } from './vistas/tabla-visitante/tabla-visitante.component';
import { AgregarVisitanteComponent } from './vistas/agregar-visitante/agregar-visitante.component';
import { ModiVisitanteComponent } from './vistas/modi-visitante/modi-visitante.component';
import { SensoresComponent } from './vistas/sensores/sensores.component';
import { CodigoveriComponent } from './vistas/codigoveri/codigoveri.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    InicioLoginComponent,
    TablaParqueComponent,
    AgregarParqueComponent,
    ModiParqueComponent,
    DetallesParqueComponent,
    TablaVisitanteComponent,
    AgregarVisitanteComponent,
    ModiVisitanteComponent,
    SensoresComponent,
    CodigoveriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
