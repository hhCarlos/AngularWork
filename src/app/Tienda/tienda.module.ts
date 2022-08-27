import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { tiendaFiltroModule } from "./tabla-filtro/tabla-filtro.module";
import { tablaContenidoModule } from "./tabla-rows/tabla-rows.module";
import { tiendaServices } from "./tienda-servicios/tienda.service";
import { TiendaComponent } from "./tienda.component";

@NgModule({
    declarations: [
        TiendaComponent
    ],
    imports: [
        tiendaFiltroModule,
        tablaContenidoModule,
        BrowserModule
    ],
    exports: [
        TiendaComponent
    ],
    providers: [
        tiendaServices
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
}) export class tiendaModule { }