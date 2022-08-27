import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { tablaContenidoComponent } from "./tabla-rows.component";

@NgModule({
    declarations: [
        tablaContenidoComponent
    ],
    imports: [],
    exports: [
        tablaContenidoComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
}) export class tablaContenidoModule { }