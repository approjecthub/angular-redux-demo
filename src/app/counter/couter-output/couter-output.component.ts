import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-couter-output',
  templateUrl: './couter-output.component.html',
  styleUrls: ['./couter-output.component.css']
})
export class CouterOutputComponent implements OnInit {
  counter:number=0
  constructor(private store:Store<{couter:{counter:number}}>) { }

  ngOnInit(): void {
    this.store.select('couter').subscribe(res=>{
      this.counter = res.counter
    })
  }

}
