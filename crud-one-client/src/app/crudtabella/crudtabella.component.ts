import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Prodotto } from 'src/prodotto';

@Component({
  selector: 'app-crudtabella',
  templateUrl: './crudtabella.component.html',
  styleUrls: ['./crudtabella.component.css']
})
export class CrudtabellaComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() select: EventEmitter<number> = new EventEmitter<number>();

  string: string = "";
  prodotti: Prodotto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  cerca(){
    console.log("sono nel cerca del component");
    this.search.emit(this.string);
  }

  seleziona(i){
    console.log("sono nel seleziona del component");
    this.select.emit(i);
  }

}
