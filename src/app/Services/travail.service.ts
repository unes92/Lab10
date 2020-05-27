import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 *
 *@author younes
 * @export
 * @class TravailService  : service du composant travaux
 */
@Injectable({
  providedIn: 'root'
})
export class TravailService {

  constructor(private http:HttpClient) { }


/**
 *url du serveur json
 *
 * @memberof TravailService
 */
url = 'http://localhost:3000/Travaux';
url1 = 'http://localhost:3000/';



 /**
   *
   *methode qui ajout d'un objet : TRAVAIL 
   * @template T  :generique
   * @param {*} TRAVAIL
   * @returns
   * @memberof TravailService
   */
  addobject<T>(e,table) {
    return this.http.post<T>(this.url1+table, e);
  }



/**
 *afficher tous les enregistrements par table
 *
 * @template T
 * @param {*} table
 * @returns
 * @memberof TravailService
 */
findAll2<T>(table) {
    return this.http.get<T[]>(this.url1+table);
  }



}
