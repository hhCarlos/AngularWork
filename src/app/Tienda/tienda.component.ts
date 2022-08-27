import { Component, OnInit } from "@angular/core";
import { tiendaServices } from "./tienda-servicios/tienda.service";
import { forkJoin, tap, map } from "rxjs";

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.scss']
}) export class TiendaComponent implements OnInit {

    constructor(private _tiendaServices: tiendaServices) { }

    categorias$ = this._tiendaServices.categorias$;

    productos$ = this._tiendaServices.productosConCategoria$;

    ngOnInit(): void {
        console.log('Tienda component inicia!');
    }
}