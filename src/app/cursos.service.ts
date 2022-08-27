import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable()
export class CursosService {
    constructor(
        private http: HttpClient
    ) {}

    getCursos(): Observable<any> {
        return this.http.get('http://localhost:3000/');
    }

    cursos$ = this.http.get<[any]>('http://localhost:3000/')
                    .pipe(
                        tap((res: any) => { console.log(res) }),
                        catchError(err => of(err))
                    );

    productos$ = this.http.get<[any]>('http://localhost:3000/productos')
                    .pipe(
                        tap((res: any) => { console.log(res) }),
                        catchError(err => of(err))
                    );

    categorias$ = this.http.get<[any]>('http://localhost:3000/categorias')
                    .pipe(
                        tap((res: any) => { console.log(res) }),
                        catchError(err => of(err))
                    );
}