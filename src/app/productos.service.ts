import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, forkJoin, map, Observable, of, tap } from "rxjs";

@Injectable() export class ProductosService {

    constructor(private http: HttpClient) { }

    testService(): string {
        return 'Service Productos is running!';
    }

    productos$ = this.http.get<any>('http://localhost:3000/productos')
                    .pipe(
                        catchError((error: any) => of(error))
                    );

    categorias$ = this.http.get<any>('http://localhost:3000/categorias')
                    .pipe(
                        catchError((error: any) => of(error))
                    );

    productoConCategoria$ = 
        forkJoin([this.productos$, this.categorias$]).pipe(
            map(([productos, categorias]) => {
                return productos.map((pro: any) => {
                    return {
                        ...pro,
                        categoriaNombre: categorias.find((el: any) => el.id === pro.categoria)?.nombre
                    }
                })
            })
        )
}