import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message!: string

  constructor() { }

  popup(message: string) {
    this.message = message
  }

  dismiss() {
    this.message = ""
  }
}
