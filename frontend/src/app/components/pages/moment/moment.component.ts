import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {
  moment?: Moment
  baseApiUrl = environment.baseApiUrl

  faTimes = faTimes
  faEdit = faEdit

  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMomentById(id).subscribe(item => this.moment = item.data)
  }

  async handleRemoveButton(id: string) {
    await this.momentService.removeMoment(id).subscribe()

    this.messageService.popup(`Momento '${this.moment?.title}' excluído com sucesso!`)
  }
}
