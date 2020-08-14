import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({

    imports: [
        RouterModule.forRoot( routes, { useHash: true } )
        // Con el hash que es un '/#/'que va entra el dominio y la ruta esto va hacer
        // que no importa donde me encuentre siempre va a haber un hash. Los navegadores
        // web van a saber que lo que viene despues del hash no es un directorio de mi sitio
        // web si no una parte de la ruta del index.html que se encuentra en esta direccion.
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
