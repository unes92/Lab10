import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Employe } from './models/employe';

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {
/*
  allEmployee: Employee[];
   headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };*/

  url = 'http://localhost:3000/Employes';


  constructor(private http:HttpClient) { }
 
  /*
  getAll(): Observable<any> {
   return this.http.get(this.url + '?_sort=id&_order=desc')
  //    .map(response => response.json());

  }*/
/*
  getAllEmployee() {
   // this.ngxSpinnerService.show();
    return this.http.get<Employee[]>(this.url, this.headerOption).subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
      });
  }*/
  
  
  createEmployee(employee){
    return this.http.post<Employe>(this.url, employee);
  }
  

   
  msg(employee){
  window.alert(employee);
  }
    
  findAll() {
    return this.http.get<Employe[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  addEmployee(etudiant) {
    return this.http.post<Employe>(this.url, etudiant);
  }
 

  
}
