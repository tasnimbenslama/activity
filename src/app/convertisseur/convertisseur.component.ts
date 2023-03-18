import { Component } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css'],
  
})

export class ConvertisseurComponent {
  montantEnDinar!: number;
  montantConverti!: number;

  handleConversionDone(converti: number) {
    this.montantConverti = converti;
  }
}
