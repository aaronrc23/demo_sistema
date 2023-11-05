import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { Productos } from '../Interface/Productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  rutaGlobal = 'http://localhost:8090/producto'; 

  constructor(private http: HttpClient) { }
  /*-------Metodo para guardar los productos en la base de datos--------*/ 
  getProducts(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.rutaGlobal}/listar`);
  }


  


}
