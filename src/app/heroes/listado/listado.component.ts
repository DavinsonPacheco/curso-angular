import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  herores: string[] = ['Spiderman', 'Goku', 'Hulk', 'Iron-man'];

  heroeBorrado: string = '';


  personasInscritas: string[]= ['Tio lucas','Marta','Daniel'];

  personaEliminada: string = '';

  borrarHeroe():void {
      this.heroeBorrado = this.herores.shift() || '';
  }
}
