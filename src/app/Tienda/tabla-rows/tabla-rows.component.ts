import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tabla-contenido',
    templateUrl: './tabla-rows.component.html',
    styleUrls: ['./tabla-rows.component.scss']
}) export class tablaContenidoComponent implements OnInit {

    ngOnInit(): void {
        console.log('Tabla row works!');
    }
}