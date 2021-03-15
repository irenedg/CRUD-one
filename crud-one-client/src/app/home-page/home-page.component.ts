import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/prodotto';
import { AggiungiState, AutomaProdotto, ModificaState, RicercaState, RimuoviState, VisualizzaState } from '../automa-prodotto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  automaP: AutomaProdotto;

  nuovoVis: boolean;
  formVis: boolean;
  tabVis: boolean;

  constructor() {
    this.automaP = new AutomaProdotto;
    this.gestionePulsanti();
  }

  ngOnInit() {
  }

  aggiungi() {
    console.log("sono in Aggiungi!");
    this.automaP.add();
    this.gestionePulsanti();
  }

  modifica() {
    console.log("sono in Modifica!");
    this.automaP.modifica();
    this.gestionePulsanti();
  }

  conferma() {
    console.log("sono in Conferma!");
    this.automaP.conferma();
    this.gestionePulsanti();
  }

  annulla() {
    console.log("sono in Annulla")
    this.automaP.annulla();
    this.gestionePulsanti();
  }

  rimuovi() {
    console.log("sono in Rimuovi!");
    this.automaP.rimuovi();
    this.gestionePulsanti();
  }

  visualizza() {
    console.log("sono in Visualizza!");
  }

  ricerca(s: string) {
    console.log("sono in Ricerca!");
    this.automaP.ricerca();
    this.gestionePulsanti();
  }

  seleziona(i: number) {
    console.log("sono in Seleziona");
    this.automaP.seleziona();
    this.gestionePulsanti();
  }

  gestionePulsanti(){
    if (this.automaP._state instanceof RicercaState){
      console.log("gestisco pulsanti nel RicercaState ");
      this.nuovoVis = true;
      this.formVis = false;
      this.tabVis = true;
    }
    else if (this.automaP._state instanceof VisualizzaState){
      console.log("gestisco pulsanti nel VisualizzaState ");
    }
    else if (this.automaP._state instanceof AggiungiState){
      console.log("gestisco pulsanti nel AggiungiState ");
    }
    else if (this.automaP._state instanceof ModificaState){
      console.log("gestisco pulsanti nel ModificaState ");
    }
    else if (this.automaP._state instanceof RimuoviState){
      console.log("gestisco pulsanti nel RimuoviState ");
    }
  }
}
