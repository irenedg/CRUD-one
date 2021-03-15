import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/prodotto';
import { state } from '../automa-prodotto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  automaP: state.AutomaProdotto;

  constructor() {
    this.automaP = new state.AutomaProdotto;
  }

  ngOnInit() {
  }

  aggiungi() {
    console.log("sono in Aggiungi!");
    this.automaP.add();
  }

  modifica() {
    console.log("sono in Modifica!");
    this.automaP.modifica();
  }

  conferma() {
    console.log("sono in Conferma!");
    this.automaP.conferma();
  }

  annulla() {
    console.log("sono in Annulla")
    this.automaP.annulla();
  }

  rimuovi() {
    console.log("sono in Rimuovi!");
    this.automaP.rimuovi();
  }

  visualizza() {
    console.log("sono in Visualizza!");
  }

  ricerca(s: string) {
    console.log("sono in Ricerca!");
    this.automaP.ricerca();
  }

  seleziona(i: number) {
    console.log("sono in Seleziona");
    this.automaP.seleziona();
  }


  /*vaiStatoAggiungi() {
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
  }*/
}
