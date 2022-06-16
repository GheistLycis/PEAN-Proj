import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {
  moment?: Moment
  baseApiUrl = environment.baseApiUrl

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMomentById(id).subscribe(item => this.moment = item.data)
  }

}
