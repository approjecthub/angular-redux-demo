import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-couter-buttons',
  templateUrl: './couter-buttons.component.html',
  styleUrls: ['./couter-buttons.component.css']
})
export class CouterButtonsComponent implements OnInit {
  
  constructor(private store:Store<{couter:{counter:number}}>) { }

  ngOnInit(): void {
  }
  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
   this.store.dispatch(reset())
  }

}
