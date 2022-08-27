import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosService } from './cursos.service';
import { ProductosComponent } from './Productos/productos.component';
import { ProductosService } from './productos.service';
import { tiendaModule } from './Tienda/tienda.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    tiendaModule
  ],
  providers: [CursosService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
