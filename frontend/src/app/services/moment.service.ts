import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { Moment } from '../Moment'
import { Response } from '../Response'

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/api/moments`

  constructor(private http: HttpClient) { }

  getAllMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl)
  }

  getMomentById(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(`${this.apiUrl}/${id}`)
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  removeMoment(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  updateMoment(id: string, form: FormData): Observable<FormData> {
    return this.http.put<FormData>(`${this.apiUrl}/${id}`, form)
  }
}
