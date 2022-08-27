import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'tabla-filtro',
    templateUrl: './tabla-filtro.component.html',
    styleUrls: ['./tabla-filtro.component.scss']
}) export class tablaFiltroComponent implements OnInit {
    @Input() data!: any;

    ngOnInit(): void {
        console.log('Filtro inicia aqui!');
    }
}