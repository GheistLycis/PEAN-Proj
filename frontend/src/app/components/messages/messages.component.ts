import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Output() dismissed = new EventEmitter<any>()
  faTimes = faTimes

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.messageService.dismiss()
    this.dismissed.emit()
  }
}
