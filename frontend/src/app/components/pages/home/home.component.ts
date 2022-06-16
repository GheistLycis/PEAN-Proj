import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = []
  filteredMoments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm!: string
  
  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getAllMoments().subscribe(item => {
      const data = item.data

      data.map(el => el.created_at = new Date(el.created_at!).toLocaleDateString('pt-BR'))

      this.allMoments = data
      this.filteredMoments = data
    })
  }

  handleSearch(input: Event): void {
    const target = input.target as HTMLInputElement
    const value = target.value

    value !== null 
      ? this.filteredMoments = this.allMoments.filter(el => el.title.toLowerCase().includes(value))
      : this.filteredMoments = this.allMoments
  }
}
