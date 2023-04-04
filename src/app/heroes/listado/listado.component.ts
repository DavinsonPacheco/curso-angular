import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  herores: string[] = ['Spiderman', 'Goku', 'Hulk', 'Iron-man'];

  tasks: string[] = ['Comprar leche', 'Sacar al perro', 'Hacer ejercicio'];

   permisos: string = 'Admin';

  

  heroeBorrado: string = '';

  borrarHeroe():void {
      this.heroeBorrado = this.herores.shift() || '';

  
  }
}
