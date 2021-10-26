import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Videojuego } from 'src/app/core/home/videojuego';
import { MessageService } from 'src/app/core/message_service';


@Injectable({ providedIn: 'root' })
export class VideojuegoService {

  private videojuegosUrl = 'http://localhost:8087/videojuego/all';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET heroes from the server */
  findAllWhere(): Observable<Videojuego[]> {


    
    return this.http.get<Videojuego[]>(this.videojuegosUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Videojuego[]>('getHeroes', []))
      );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
     private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
      /** Log a HeroService message with the MessageService */
      private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
      }
}
