import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent {
  @Input() montant!: number;
  @Output() conversionDone = new EventEmitter<number>();

  ngOnChanges() {
    if (this.montant) {
      const tauxDeChange = 0.34; // taux de change actuel de dinar à euro
      const montantEnEuro = this.montant * tauxDeChange;
      this.conversionDone.emit(montantEnEuro);
    }
  }
}
