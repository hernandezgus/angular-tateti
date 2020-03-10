import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FichaComponent } from './ficha/ficha.component';
import { TableroComponent } from './tablero/tablero.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FichaComponent, TableroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
