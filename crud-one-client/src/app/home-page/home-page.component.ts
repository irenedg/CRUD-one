import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/prodotto';
import { UIAutomaP } from './ui-automa-p';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit, UIAutomaP {

  constructor() { }

  ngOnInit() {
  }

  vaiStatoAggiungi() {
    console.log("sono in vaiStatoAggiungi!");
  }

  vaiStatoModifica() {
    console.log("sono in vaiStatoModifica!");
  }

  vaiStatoConferma() {
    console.log("sono in vaiStatoConferma!");
  }

  vaiStatoAnnulla() {
    console.log("sono in vaiStatoAnnulla")
  }

  vaiStatoRimuovi() {
    console.log("sono in vaiStatoRimuovi!");
  }

  vaiStatoVisualizza() {
    console.log("sono in vaiStatoVisualizza!");
  }

  vaiStatoRicerca(s: string) {
    console.log("sono in vaiStatoRicerca!");
  }

  vaiStatoSeleziona(i: number) {
    console.log("sono in vaiStatoSeleziona")
  }
}
