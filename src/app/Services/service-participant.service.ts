import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Participant } from '../models/participant';
/**
 *
 *@author younes
 * @export
 * @class ServiceParticipantService  : service du composant Participant
 */

@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService {

  /**
   *
   *list qui va charger tous les Participants
   * @type {Participant[]}
   * @memberof ServiceParticipantService
   */
  allParticipant: Participant[];

/**
 *url du serveur json
 *
 * @memberof ServiceParticipantService
 */
url = 'http://localhost:3000/Participants';

url1 = 'http://localhost:3000/';
/**
 *Creates an instance of ServiceParticipantService : injection du http service
 * @param {HttpClient} http
 * @memberof ServiceParticipantService
 */
constructor(private http:HttpClient) { }
 
 

  
  /**
   *
   *methode qui ajout d'un objet : Participant 
   * @template T  :gernerique
   * @param {*} Participant
   * @returns
   * @memberof ServiceParticipantService
   */
  
  addobject<T>(e,table) {
    return this.http.post<T>(this.url1+table, e);
  }
  

   

  /**
   *
   *methode qui retourne la liste de la classe generique : Participant
   * @template T classe generique : peut etre etudiant / participant ....
   * @returns
   * @memberof ServiceParticipantService
   */
  findAll<T>() {
    return this.http.get<T[]>(this.url);
  }







/**
 *methode qui modifier un participant
 * @param {Participant} participant
 * @returns {Observable<Participant>}
 * @memberof ServiceParticipantService
 */
updateParticipant(participant: Participant): Observable<Participant>{
    const url2 = `${this.url}/${participant.id}`;
    console.log("url"+url2);
    return this.http.put<Participant>(url2, participant).pipe( // pipe format de rst
      map(() => participant),     //map permet de créer un nouvel Observable à partir de l'Observable d'origine en transformant simplement chacune de ses valeurs.
      catchError(this.handleError)
    );
  }


/**
 *supprimer un participant
 *
 * @param {*} id
 * @returns
 * @memberof ServiceParticipantService
 */
delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


/**
 *recuperer un participant par id
 *
 * @param {*} id
 * @returns {Observable<Participant>}
 * @memberof ServiceParticipantService
 */
getParticipant(id): Observable<Participant> {
  const url = `${this.url}/${id}`;
  return this.http.get<Participant>(url).pipe(
    catchError(this.handleError));
  }







  msg(Participant){
    window.alert(Participant);
    }


    private handleError(error: any) {
      console.error(error);                                       //Created a function to handle and log errors, in case
      return throwError(error);
    }

}
