import { Component } from '@angular/core';
import{ Emploi } from '../Models/emploi';


@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  listEmploi:Emploi[]=[{reference: " 3", title: "actia", entreprise: "T", etat: true},
  {reference: "2", title: "vermeg", entreprise: "S", etat: false},
  {reference: "1", title: "esprit", entreprise: "D", etat: true}]

     result!: number;
     count():number {
    return this.result = this.listEmploi.filter(e => e.etat).length;  }
  
 
  
}
