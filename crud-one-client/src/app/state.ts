import { Prodotto } from "src/prodotto";
import { AutomaProdotto } from "./automa-prodotto";
import { IEvent } from "./i-event";

export interface State{
    next(e:IEvent): void;    
}