import { Component } from '@angular/core';
import { Actor } from '../Models/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  listActors : Actor [] = [
    {'lastName':'Robert','firstName':'Julia'},
    {'lastName':'Walker','firstName':'Paul'},
    {'lastName':'Pitt','firstName':'Brad'}
];
  constructor() { }

  Delete(element : any){
   this.listActors = this.listActors.filter(e => e != element);
  }
  ngOnInit(): void {
  }
}
