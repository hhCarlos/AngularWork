import { Component } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, EMPTY, forkJoin, map, of, startWith, Subject, tap } from "rxjs";
import { ProductosService } from "../productos.service";

@Component({
    selector: 'productos-component',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.scss']
}) export class ProductosComponent {

    private porCategoriaSubj = new BehaviorSubject(0);
    porCategoriaObservable$ = this.porCategoriaSubj.asObservable();

    constructor(private _productos: ProductosService) { }

    productos$ = combineLatest([
        this._productos.productoConCategoria$,
        this.porCategoriaObservable$
    ]).pipe(
        map(
            (
                [
                    productos, 
                    categoriaSelected
                ]
            ) => productos.filter((producto: any) => categoriaSelected ? categoriaSelected == producto.categoria : true)),
            catchError((err) => of('Some error has happened!'))
    );

    categorias$ = this._productos
        .categorias$
        .pipe(
            catchError((err) => of('Some error has happened!'))
        );


    onSelectCategoria(data: any): void {
        this.porCategoriaSubj.next(+data.value);
    }
}