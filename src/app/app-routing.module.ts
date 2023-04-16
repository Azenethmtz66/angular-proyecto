import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { RegistroComponent } from './vistas/registro/registro.component'
import { AgregarParqueComponent } from './vistas/agregar-parque/agregar-parque.component'
import { AgregarVisitanteComponent } from './vistas/agregar-visitante/agregar-visitante.component'
import { ModiParqueComponent } from './vistas/modi-parque/modi-parque.component'
import { ModiVisitanteComponent } from './vistas/modi-visitante/modi-visitante.component'
import { InicioLoginComponent } from './vistas/inicio-login/inicio-login.component'
import { TablaParqueComponent } from './vistas/tabla-parque/tabla-parque.component'
import { TablaVisitanteComponent } from './vistas/tabla-visitante/tabla-visitante.component'
import { DetallesParqueComponent } from './vistas/detalles-parque/detalles-parque.component'
import { SensoresComponent } from './vistas/sensores/sensores.component'



const routes: Routes = [
  {path: '', redirectTo:'pagina', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'pagina', component:InicioComponent},
  {path:'registro', component:RegistroComponent},
  {path:'agregarparque', component:AgregarParqueComponent},
  {path:'modiparque', component:ModiParqueComponent},
  {path:'parques', component:TablaParqueComponent},
  {path:'visitantes', component:TablaVisitanteComponent},
  {path:'prin', component:InicioLoginComponent},
  {path:'sensores', component:SensoresComponent},
  {path:'parque_info', component:DetallesParqueComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
