import { Component} from '@angular/core';
import { Formulaire } from '../Models/formulaire';
import { Product } from '../Models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

    

    formulaire: Formulaire = new Formulaire();
  
    
    TemplateDrivenForm(F: NgForm)
      {console.log(F);}
      
    
     
     
}
