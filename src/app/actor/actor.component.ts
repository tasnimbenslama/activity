import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Actor } from '../Models/actor';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  @Input() actor! :Actor;
  @Output() sender = new  EventEmitter();
  constructor() { }

  getActor(actor : Actor){
    this.sender.emit(actor);
  }
  ngOnInit(): void {
  }
}
