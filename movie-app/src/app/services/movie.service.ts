import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'b002f074';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=war`);
  }
}