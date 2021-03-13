import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/prodotto';

@Component({
  selector: 'app-crudtabella',
  templateUrl: './crudtabella.component.html',
  styleUrls: ['./crudtabella.component.css']
})
export class CrudtabellaComponent implements OnInit {

  prodotti: Prodotto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
