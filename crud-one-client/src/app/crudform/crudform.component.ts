import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css']
})
export class CrudformComponent implements OnInit {

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  modifica() {
    console.log("sono in modifica del component");
    this.edit.emit();
  }

  conferma() {
    console.log("sono in conferma del component");
    this.confirm.emit();
  }

  annulla() {
    console.log("sono in annulla del component");
    this.cancel.emit();
  }

  rimuovi() {
    console.log("sono in rimuovi del component");
    this.remove.emit();
  }

}
