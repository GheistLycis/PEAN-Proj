import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment
  btnText: string = "Editar"

  constructor(
    private route: ActivatedRoute,
    private momentService: MomentService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMomentById(id).subscribe(moment => this.moment = moment.data)
  }

  async editHandler(momentData: Moment) {
    const formData = new FormData()

    formData.append("title", momentData.title)
    formData.append("description", momentData.description)
    if(momentData.image) formData.append("image", momentData.image)

    await this.momentService.updateMoment(this.moment.id!, formData).subscribe()

    this.messageService.popup(`Momento '${this.moment.title}' editado com sucesso!`)
  }
}
