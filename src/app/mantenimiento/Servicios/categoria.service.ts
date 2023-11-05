import { Injectable } from '@angular/core';
import { CategoriaComponent } from '../pages/categoria/categoria.component';
import { Observable ,Subject} from 'rxjs';
import { Categoria } from '../Interface/Categoria';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  rutaGlobal = 'http://localhost:8090/categoria'; 

  private categoriasSubject = new Subject<Categoria[]>();
  categorias$ = this.categoriasSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Crear Categoria

  // crearCategoria(categoria: Categoria): Observable<void> {
  //   return this.http.post<void>(`${this.rutaGlobal}/registrar`, categoria);
  // }
  crearCategoria(categoria: Categoria): Observable<void> {
    return this.http.post<void>(`${this.rutaGlobal}/registrar`, categoria).pipe(
      tap(() => {
        // Después de crear la categoría, actualizamos la lista de categorías
        this.getCategorias().subscribe((categorias) => {
          this.categoriasSubject.next(categorias);
        });
      })
    );
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.rutaGlobal}/listar`);
  }


  // Actualizar Categoria
  
  actualizarCategoria(idcategoria: number, categoria: Categoria): Observable<void> {   //busca segun id de la interface
    return this.http.put<void>(`${this.rutaGlobal}/${idcategoria}`, categoria);
  }
  
    // En tu servicio de Angular
  eliminarCategoria(idcategoria: number): Observable<void> {
    return this.http.delete<void>(`${this.rutaGlobal}/${idcategoria}`);
  }
}
