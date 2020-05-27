import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 *
 *@author younes
 * @export
 * @class DiscussionService  : service du composant Discussion
 */
@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  constructor(private http:HttpClient) { }


  /**
 *url du serveur json
 *
 * @memberof DiscussionService
 */
url = 'http://localhost:3000/Discussions';
url1 = 'http://localhost:3000/';



 /**
   *
   *methode qui ajout d'un objet : Discussion 
   * @template T  :gernerique
   * @param {*} table Discussion
   * @returns
   * @memberof DiscussionService
   */
  addobject<T>(e,table) {
    return this.http.post<T>(this.url1+table, e);
  }



/**
 *afficher tous les discussions
 *
 * @template T
 * @param {*} table
 * @returns
 * @memberof DiscussionService
 */
findAll2<T>(table) {
    return this.http.get<T[]>(this.url1+table);
  }

}
