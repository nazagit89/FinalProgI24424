import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

  constructor(private http: HttpClient) {

  }
  public obtenerAseguradora(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/data.json')
  }
}
