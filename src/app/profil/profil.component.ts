import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ServiceEtudiantService } from '../Services/service-etudiant.service';
import {Etudiant } from '../models/etudiant';
import {Router} from '@angular/router';

/**
 * @author : younes
 * classe  ProfilComponent : qui ajout les etudiants
 */



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 

  /**
   *
   *definition du modele myEtudiant qu'on va utliser pour relier le TS avec DOM
   * @type {Etudiant}
   * @memberof ProfilComponent
   */
  myEtudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    telephone:''
  }

  emp:Etudiant;
  
 Etudiants: Etudiant[];

  ngOnInit(): void {
  }
 

  /**
   *Creates an instance of ProfilComponent.  : injection du service + initialisation du la liste etudiants
   * @param {ServiceEtudiantService} addService
   * @memberof ProfilComponent
   */
  constructor(private addService: ServiceEtudiantService,private laRoute:Router) { 
  
//this.Etudiants=[];
   
  }

/**
 *definiton validator email
 *
 * @memberof ProfilComponent
 */
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  /**
   *
   *ajoutetudiant : methode qui fait l'ajout d'un etudiant vers le fihier json
   * @memberof ProfilComponent
   */
  ajoutetudiant(){
    this.addService.addobject<Etudiant>(this.myEtudiant,"Etudiants").subscribe(
      (etudiant) => { this.Etudiants = [etudiant,...this.Etudiants];
        this.laRoute.navigate(['/Etudiants']);
   // console.log(" etudiant 1"+this.Etudiants[0].nom);
  //  console.log(" etudiant 2"+this.Etudiants[2].nom);
  //  console.log("nom etudiant"+this.myEtudiant.nom);

    
    }
    )  };


  /**
   *vider les champs
   *
   * @memberof ProfilComponent
   */
  reset() {
    this.myEtudiant = {
      nom:'',
      prenom:'',
      email:'',
      telephone:''
    }
  }


/*
  constructor(private formBuilder: FormBuilder) { 
    this.profilForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]]
    });
   
  }*/

/*
  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('emails') ? 'Not a valid email' : '';
  }*/
  /*
  get email() {
    return this.profilForm.get('email');
  }

  get nom() {
    return this.profilForm.get('nom');
  }

  get prenom() {
    return this.profilForm.get('prenom');
  }

  get telephone() {
    return this.profilForm.get('telephone');
  }*/

      register(data){
        this.emp=data;
      console.log("data"+data);
      console.log("nom employe"+this.myEtudiant.nom);
    //  this.services.createEmployee(this.emp);

        }

  /*
    afficher_etudiant()
    {
      this.data.getArticles().subscribe(
        articles => this.articles = articles
      );
    }*/



}
