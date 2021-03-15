import { AddEvent } from "./add-event";
import { AnnullaEvent } from "./annulla-event";
import { ConfermaEvent } from "./conferma-event";
import { IEvent } from "./i-event";
import { ModificaEvent } from "./modifica-event";
import { RicercaEvent } from "./ricerca-event";
import { RimuoviEvent } from "./rimuovi-event";
import { SelezionaEvent } from "./seleziona-event";
import { State } from "./state";

export module state {
    
    interface UIAutomaP {
        
        add();
        annulla();
        conferma();
        modifica();
        ricerca();
        rimuovi();
        seleziona();
    }

    export class AutomaProdotto {
       
        public _state: UIAutomaP;

        constructor(){
            this._state = new RicercaState(this);
        }

        public add(){
            this._state.add();
        }

        public annulla(){
            this._state.annulla();
        }

        public conferma(){
            this._state.conferma();
        }

        public modifica(){
            this._state.modifica();
        }

        public ricerca(){
            this._state.ricerca();
        }

        public rimuovi(){
            this._state.rimuovi();
        }

        public seleziona(){
            this._state.seleziona();
        }
    }

    class RicercaState implements UIAutomaP{

        constructor(private automaProdotto: AutomaProdotto){
        }

        public add(){
            console.log("sono nell'add di RicercaState")
            this.automaProdotto._state = new AggiungiState(this.automaProdotto);
        }

        public annulla(){
            console.log("sono nell'annulla di RicercaState")
        }

        public conferma(){
            console.log("sono nel conferma di RicercaState")
        }

        public modifica(){
            console.log("sono nel modifica di RicercaState")
        }

        public ricerca(){
            console.log("sono nel ricerca di RicercaState")
        }

        public rimuovi(){
            console.log("sono nel rimuovi di RicercaState")
        }

        public seleziona(){
            console.log("sono nel seleziona di RicercaState")
        }
    }

    class VisualizzaState implements UIAutomaP{

        constructor(private automaProdotto: AutomaProdotto){
        }

        public add(){
            console.log("sono nell'add di VisualizzaState")
            this.automaProdotto._state = new AggiungiState(this.automaProdotto);
        }

        public annulla(){
            console.log("sono nell'annulla di VisualizzaState")
        }

        public conferma(){
            console.log("sono nel conferma di VisualizzaState")
        }

        public modifica(){
            console.log("sono nel modifica di VisualizzaState")
            this.automaProdotto._state = new ModificaState(this.automaProdotto);

        }

        public ricerca(){
            console.log("sono nel ricerca di VisualizzaState")
            this.automaProdotto._state = new RicercaState(this.automaProdotto);

        }

        public rimuovi(){
            console.log("sono nel rimuovi di VisualizzaState")
            this.automaProdotto._state = new RimuoviState(this.automaProdotto);

        }

        public seleziona(){
            console.log("sono nel seleziona di VisualizzaState")
        }
    }

    class AggiungiState implements UIAutomaP{

        constructor(private automaProdotto: AutomaProdotto){
        }

        public add(){
            console.log("sono nell'add di AggiungiState")
        }

        public annulla(){
            console.log("sono nell'annulla di AggiungiState")
            this.automaProdotto._state = new RicercaState(this.automaProdotto);
        }

        public conferma(){
            console.log("sono nel conferma di AggiungiState")
            this.automaProdotto._state = new VisualizzaState(this.automaProdotto);
        }

        public modifica(){
            console.log("sono nel modifica di AggiungiState")
        }

        public ricerca(){
            console.log("sono nel ricerca di AggiungiState")
        }

        public rimuovi(){
            console.log("sono nel rimuovi di AggiungiState")
        }

        public seleziona(){
            console.log("sono nel seleziona di AggiungiState")
        }
    }

    class RimuoviState implements UIAutomaP{

        constructor(private automaProdotto: AutomaProdotto){
        }

        public add(){
            console.log("sono nell'add di RimuoviState")
        }

        public annulla(){
            console.log("sono nell'annulla di RimuoviState")
            this.automaProdotto._state = new VisualizzaState(this.automaProdotto);
        }

        public conferma(){
            console.log("sono nel conferma di RimuoviState")
            this.automaProdotto._state = new RicercaState(this.automaProdotto);
        }

        public modifica(){
            console.log("sono nel modifica di RimuoviState")
        }

        public ricerca(){
            console.log("sono nel ricerca di RimuoviState")
        }

        public rimuovi(){
            console.log("sono nel rimuovi di RimuoviState")
        }

        public seleziona(){
            console.log("sono nel seleziona di RimuoviState")
        }
    }

    class ModificaState implements UIAutomaP{

        constructor(private automaProdotto: AutomaProdotto){
        }

        public add(){
            console.log("sono nell'add di ModificaState")
        }

        public annulla(){
            console.log("sono nell'annulla di ModificaState")
            this.automaProdotto._state = new VisualizzaState(this.automaProdotto);
        }

        public conferma(){
            console.log("sono nel conferma di ModificaState")
            this.automaProdotto._state = new VisualizzaState(this.automaProdotto);
        }

        public modifica(){
            console.log("sono nel modifica di ModificaState")
        }

        public ricerca(){
            console.log("sono nel ricerca di ModificaState")
        }

        public rimuovi(){
            console.log("sono nel rimuovi di ModificaState")
        }

        public seleziona(){
            console.log("sono nel seleziona di ModificaState")
        }
    }
}







/*module test {
    export class AutomaProdotto {
        public ricercaState: State;
        public visualizzaState: State;
        public aggiungiState: State;
        public rimuoviState: State;
        public modificaState: State;

        public currentState: State;

        constructor() {
            this.ricercaState = new RicercaState(this);
            this.visualizzaState = new VisualizzaState(this);
            this.aggiungiState = new AggiungiState(this);
            this.rimuoviState = new RimuoviState(this);
            this.modificaState = new ModificaState(this);

        }

        public setState(state: State) {
            this.currentState = state;
        }

        public getState(): State {
            return this.currentState;
        }

    }

    export class RicercaState implements State {
        automaP: AutomaProdotto;

        constructor(automaP: AutomaProdotto) {
            this.automaP = automaP;
        }

        next(e: IEvent): void {
            if (e instanceof AddEvent) {
                this.automaP.setState(this.automaP.aggiungiState);
            }
            else if (e instanceof RicercaEvent) {
                console.log("sono in RicercaEvent")
            } else {
                console.log("evento inatteso!")
            }
        }

    }

    export class VisualizzaState implements State {

        automaP: AutomaProdotto;

        constructor(automaP: AutomaProdotto) {
            this.automaP = automaP;
        }

        next(e: IEvent): void {
            if (e instanceof AddEvent) {
                this.automaP.setState(this.automaP.aggiungiState);
            }
            else if (e instanceof SelezionaEvent) {
                console.log("sono in SelezionaEvent")
            }
            else if (e instanceof ModificaEvent) {
                this.automaP.setState(this.automaP.modificaState);
            }
            else if (e instanceof RimuoviEvent) {
                this.automaP.setState(this.automaP.rimuoviState);
            }
            else if (e instanceof RicercaEvent) {
                this.automaP.setState(this.automaP.ricercaState);
            }
            else {
                console.log("evento inatteso!")
            }
        }

    }


    export class AggiungiState implements State {

        automaP: AutomaProdotto;

        constructor(automaP: AutomaProdotto) {
            this.automaP = automaP;
        }

        next(e: IEvent): void {
            if (e instanceof ConfermaEvent) {
                this.automaP.setState(this.automaP.visualizzaState);
            }
            else if (e instanceof AnnullaEvent) {
                this.automaP.setState(this.automaP.ricercaState);
            } else {
                console.log("evento inatteso!")
            }
        }
    }

    export class RimuoviState implements State {

        automaP: AutomaProdotto;

        constructor(automaP: AutomaProdotto) {
            this.automaP = automaP;
        }

        next(e: IEvent): void {
            if (e instanceof AnnullaEvent) {
                this.automaP.setState(this.automaP.visualizzaState);
            }
            else if (e instanceof ConfermaEvent) {
                this.automaP.setState(this.automaP.ricercaState);
            } else {
                console.log("evento inatteso!")
            }
        }

    }

    export class ModificaState implements State{

        automaP : AutomaProdotto; 

        constructor(automaP : AutomaProdotto) {
            this.automaP = automaP;
        }

        next(e: IEvent): void {
            if (e instanceof AnnullaEvent) {
                this.automaP.setState(this.automaP.visualizzaState);
            }
            else if (e instanceof ConfermaEvent) {
                this.automaP.setState(this.automaP.visualizzaState);
            } else {
                console.log("evento inatteso!")
            }
        }
    }
}*/