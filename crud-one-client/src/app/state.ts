import { Prodotto } from "src/prodotto";
import { IEvent } from "./i-event";

export interface State{
    next(e:IEvent): void;    
}