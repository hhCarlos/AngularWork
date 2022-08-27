import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of, tap, forkJoin, map } from "rxjs";

@Injectable()
export class tiendaServices {

    constructor(private http: HttpClient) { }

    testInnerService = 'Everything is working!';

    productos$ = this.http.get<[any]>('http://localhost:3007/productos')
        .pipe(
            catchError((error: any) => of(error))
        );

    categorias$ = this.http.get<[any]>('http://localhost:3007/categorias')
        .pipe(
            catchError((error: any) => of(error))
        );

    productosConCategoria$ = 
        forkJoin([this.productos$, this.categorias$])
            .pipe(
                map(([productos, categorias]) => {
                    return productos.map((producto: any) => {
                        return {
                            ...producto,
                            categoriaName: categorias.find((categoria: any) => categoria.id == producto.categoria).name
                        }
                    });
                })
            );
} 