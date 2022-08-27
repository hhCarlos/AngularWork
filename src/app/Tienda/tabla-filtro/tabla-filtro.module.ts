import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { tablaFiltroComponent } from "./tabla-filtro.component";

@NgModule({
    declarations: [tablaFiltroComponent],
    imports: [
        BrowserModule
    ],
    exports: [
        tablaFiltroComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
}) export class tiendaFiltroModule {}