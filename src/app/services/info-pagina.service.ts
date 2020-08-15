import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }


   private cargarInfo(): void{
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (res: InfoPagina) => {
          this.cargada = true;
          this.info = res;
        });
   }



  private cargarEquipo(): void{

    this.http.get('https://angular-html-3b7fb.firebaseio.com/equipo.json')
            .subscribe( (res: any) => {

              this.equipo = res;
              // console.log(res);
            });
  }


}
