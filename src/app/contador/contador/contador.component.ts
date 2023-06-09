import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acomular(base)">+ {{ base }}</button>
    <span> {{ numero }}</span>
    <button (click)="acomular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador app';
  numero: number = 0;

  base: number = 10;

  acomular(base: number) {
    this.numero += base;
  }
}
