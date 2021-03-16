import { AddEvent, ConfermaEvent, ModificaEvent, RicercaEvent, AnnullaEvent, RimuoviEvent, SelezionaEvent } from './automa/eventi';
import { Automabile } from './automa/state';
import { Automa } from './automa/automa';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from './prodotto';
import { Event } from './automa/event';
import { ListaProdottiDto } from './lista-prodotti-dto';
import { ProdottoDto } from './prodotto-dto';
import { ProdottoRicercaDto } from './prodotto-ricerca-dto';
import { RicercaDto } from './ricerca-dto';
import { AggiungiState, ModificaState, RimuoviState } from './automa/stati';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile, OnInit {
  prodotto: Prodotto = new Prodotto();
  prodotti: Prodotto[] = [];
  searchCriterion: string = "";
  automa: Automa;

  // proprietà gui
  buttonNuovaVisible: boolean = false;
  formDivVisible: boolean = false;
  campiNonEditabili: boolean = false;
  confAnnVisible: boolean = false;
  searchVisible: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // TODO: caricare lista prodotti all'inizio
    this.aggiorna();
    this.automa = new Automa(this);
  }

  goToAggiungi() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = false;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToModifica() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = false;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToRicerca() {
    this.buttonNuovaVisible = true;
    this.formDivVisible = false;
    // this.campiNonEditabili = true;
    // this.confAnnVisible = true;
    this.searchVisible = true;
  }

  goToRimuovi() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = true;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToVisualizza() {
    this.buttonNuovaVisible = true;
    this.formDivVisible = true;
    this.campiNonEditabili = true;
    this.confAnnVisible = false;
    this.searchVisible = true;
  }

  nuova() {
    this.automa.next(new AddEvent());
  }

  modifica() {
    this.automa.next(new ModificaEvent());
  }

  conferma() {
    console.log("stato: ", this.automa.stato);
    if (this.automa.stato instanceof AggiungiState) {
      console.log("sono in conferma aggiungi");
      // chiamata REST nuova
      if (this.prodotto.codice != null && this.prodotto.descrizione != null) {
        let dtoA: ProdottoDto = new ProdottoDto;
        console.log("codice     : ", this.prodotto.codice);
        console.log("descrizione: ", this.prodotto.descrizione);
        dtoA.prodotto = this.prodotto;
        let ossA: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>('http://localhost:8080/aggiungi', dtoA);
        ossA.subscribe(r => this.prodotti = r.listaProdotto);
      }
    } else if (this.automa.stato instanceof ModificaState) {
      console.log("sono in conferma modifica");
      // chiamata REST modifica
      if (this.prodotto.codice != null && this.prodotto.descrizione != null) {
        let dtoM: ProdottoRicercaDto = new ProdottoRicercaDto;
        dtoM.prodotto = this.prodotto;
        dtoM.criterio = this.searchCriterion;
        let ossM: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>('http://localhost:8080/modifica', dtoM);
        ossM.subscribe(r => this.prodotti = r.listaProdotto);
      }
    } else if (this.automa.stato instanceof RimuoviState) {
      console.log("sono in conferma rimuovi");
      // chiamata REST rimuovi    
      if (this.prodotto.codice != null && this.prodotto.descrizione != null) {
        let dtoR: ProdottoRicercaDto = new ProdottoRicercaDto;
        dtoR.prodotto = this.prodotto;
        dtoR.criterio = this.searchCriterion;
        let ossR: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>('http://localhost:8080/rimuovi', dtoR);
        ossR.subscribe(r => this.prodotti = r.listaProdotto);
      }
    }
    this.automa.next(new ConfermaEvent());
    this.prodotto = new Prodotto;
  }

  annulla() {
    this.automa.next(new AnnullaEvent());
    this.prodotto.codice = "";
    this.prodotto.descrizione = "";
  }

  rimuovi() {
    this.automa.next(new RimuoviEvent());
  }

  cerca() {
    // chiamata REST ricerca
    this.automa.next(new RicercaEvent());
    let dto: RicercaDto = new RicercaDto;
    dto.criterio = this.searchCriterion;
    let oss: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>('http://localhost:8080/ricerca', dto);
    oss.subscribe(r => this.prodotti = r.listaProdotto);
  }

  seleziona(prod: Prodotto) {
    this.automa.next(new SelezionaEvent());
    this.prodotto.id = prod.id;
    this.prodotto.codice = prod.codice;
    this.prodotto.descrizione = prod.descrizione;
  }

  aggiorna() {
    let oss: Observable<ListaProdottiDto> = this.http.get<ListaProdottiDto>('http://localhost:8080/visualizza-lista');
    oss.subscribe(r => this.prodotti = r.listaProdotto);
  }
}
