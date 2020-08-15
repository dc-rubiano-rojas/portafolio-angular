import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

   private cargarProductos(): void{
      this.http.get('https://angular-html-3b7fb.firebaseio.com/productos_idx.json')
                .subscribe( (res: Producto[]) => {
                  // console.log(res);
                  this.productos = res;
                  this.cargando = false;
                });
   }
}
