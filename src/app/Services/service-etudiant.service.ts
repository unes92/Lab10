import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Etudiant} from '../models/etudiant';
/**
 *
 *@author younes
 * @export
 * @class ServiceEtudiantService  : service du composant etudiant
 */
@Injectable({
  providedIn: 'root' 
})
export class ServiceEtudiantService {

  /**
   *
   *list qui va charger tous les etudiants
   * @type {Etudiant[]}
   * @memberof ServiceEtudiantService
   */
  allEtudiant: Etudiant[];

/**
 *url du serveur json
 *
 * @memberof ServiceEtudiantService
 */
url = 'http://localhost:3000/Etudiants';
url1 = 'http://localhost:3000/';
/**
 *Creates an instance of ServiceEtudiantService : injection du http service
 * @param {HttpClient} http
 * @memberof ServiceEtudiantService
 */
constructor(private http:HttpClient) { }
 
 

  
  /**
   *
   *methode qui ajout d'un objet : etudiant 
   * @template T  :gernerique
   * @param {*} etudiant
   * @returns
   * @memberof ServiceEtudiantService
   */
  addobject<T>(e,table) {
    return this.http.post<T>(this.url1+table, e);
  }
  

   

  /**
   *
   *methode qui retourne la liste de la classe generique : etudiant
   * @template T classe generique : peut etre etudiant / participant ....
   * @returns
   * @memberof ServiceEtudiantService
   */
  findAll<T>() {
    return this.http.get<T[]>(this.url);
  }


  /**
   *
   *methode qui retourne la liste des enregistrments la classe generique 
   * @template T
   * @param {*} table
   * @returns
   * @memberof ServiceEtudiantService
   */
  findAll2<T>(table) {
    return this.http.get<T[]>(this.url1+table);
  }




/**
 *modifer un etudiant
 *
 * @param {Etudiant} etudiant
 * @returns {Observable<Etudiant>}
 * @memberof ServiceEtudiantService
 */
updateEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    const url2 = `${this.url}/${etudiant.id}`;
    console.log("url"+url2);
    return this.http.put<Etudiant>(url2, etudiant).pipe(
      map(() => etudiant),
      catchError(this.handleError)
    );
  }


/**
 *supprimer un etudiant
 *
 * @param {*} id
 * @returns
 * @memberof ServiceEtudiantService
 */
delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


/**
 *rechercher un etudiant par id
 *
 * @param {*} id
 * @returns {Observable<Etudiant>}
 * @memberof ServiceEtudiantService
 */
getEtudiant(id): Observable<Etudiant> {
  const url = `${this.url}/${id}`;
  return this.http.get<Etudiant>(url).pipe(
    catchError(this.handleError));
  }






/**
 *  function to handle and log errors
 *
 * @private
 * @param {*} error
 * @returns
 * @memberof ServiceEtudiantService
 */
private handleError(error: any) {
      console.error(error);                                     
      return throwError(error);
    }

}
