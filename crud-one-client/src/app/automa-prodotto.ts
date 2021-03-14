import { AddEvent } from "./add-event";
import { AnnullaEvent } from "./annulla-event";
import { ConfermaEvent } from "./conferma-event";
import { IEvent } from "./i-event";
import { ModificaEvent } from "./modifica-event";
import { RicercaEvent } from "./ricerca-event";
import { RimuoviEvent } from "./rimuovi-event";
import { SelezionaEvent } from "./seleziona-event";
import { State } from "./state";

module test {
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
}