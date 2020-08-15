import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

   async cargarProductos(){

      return new Promise( (resolve, reject) => {

        this.http.get('https://angular-html-3b7fb.firebaseio.com/productos_idx.json')
                .subscribe( (res: Producto[]) => {
                  // console.log(res);
                  this.productos = res;
                  this.cargando = false;
                  resolve();
                });
      });
   }

    getProducto(id: string): Observable<any>{
     // `` estas comillas nos permite usar unas caracteristicas del ecmaScript que se llama
     // template literales
      return this.http.get(`https://angular-html-3b7fb.firebaseio.com/productos/${ id }.json`);
   }

    async buscarProducto(termino: string){

    if (this.productos.length === 0){
        await this.cargarProductos();
        this.filtrarProductos(termino);
    }else{
      this.filtrarProductos(termino);
    }

   }


   private filtrarProductos(termino: string){

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0  || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrado.push(prod);
      }

    });
   }


}
