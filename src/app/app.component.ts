import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, EMPTY, forkJoin, map, Observable, Subscription, tap } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  /* title = 'obervables';
  cursos!: Observable<[any]>;

  constructor(
    private _cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  } */

  constructor(
    private _cursosService: CursosService
  ) {}

  cursos$: Observable<[any]> = this._cursosService.cursos$
    .pipe(
      catchError((err) => {
        console.log('El Error ', err);
        return EMPTY;
      }
    )
  );

  productos$ = forkJoin([this._cursosService.productos$, this._cursosService.categorias$])
                .pipe(
                  map(([productos, categorias]: any) => {
                    return productos.map((producto: any) => {
                      return {
                        ...producto,
                        iva: producto.precio * .15,
                        categoria: categorias.find((categoria: any) => producto.categoiria === categoria.id).nombre
                      }
                    })
                  }),
                  catchError((err) => {
                    console.log('El Error ', err);
                    return EMPTY;
                  })
                );

  knowData(): void {
    console.log(this.cursos$);
  }
}
