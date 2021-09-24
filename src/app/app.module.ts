import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CouterComponent } from './counter/couter/couter.component';
import { CouterOutputComponent } from './counter/couter-output/couter-output.component';
import { CouterButtonsComponent } from './counter/couter-buttons/couter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CouterComponent,
    CouterOutputComponent,
    CouterButtonsComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({couter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
