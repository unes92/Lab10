import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ServiceParticipantService } from '../../Services/service-participant.service';
import {Participant } from '../../models/participant';
/**
 *
 *@author younes
 * @export
 * @class AjouterparticipantComponent  : service du composant participant
 */
@Component({
  selector: 'app-ajouterparticipant',
  templateUrl: './ajouterparticipant.component.html',
  styleUrls: ['./ajouterparticipant.component.css']
})
export class AjouterparticipantComponent implements OnInit {
  
  myParticipant: Participant = {
    nom:'',
    prenom:'',
    dateNaissance:'',
    age:0,
    email:'',
    telephone:''
  }

  participants : Participant[]=[];

  constructor(private addService: ServiceParticipantService) { }


  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


/**
 *ajouter un participant
 *
 * @memberof AjouterparticipantComponent
 */
ajoutParticipant(){
    console.log("myparticipants");
    console.log(this.myParticipant);


let datenaiss: Date = new Date(this.myParticipant.dateNaissance);  
let date: Date = new Date();  
let age=date.getFullYear()-datenaiss.getFullYear();

this.myParticipant.age=age;

   this.addService.addobject<Participant>(this.myParticipant,"Participants").subscribe(
      participant =>this.participants = [participant, ...this.participants]);

      console.log("datenaiss"+datenaiss);
      console.log("datenaiss"+date);
      console.log("age"+age);
  };

 /*ajoutetudiant(){
    this.addService.addobject<Etudiant>(this.myEtudiant,"Etudiants").subscribe(
      etudiant => this.Etudiants = [etudiant,...this.Etudiants]);
    
    console.log(" etudiant 1"+this.Etudiants[0].nom);
    console.log(" etudiant 2"+this.Etudiants[2].nom);
    console.log("nom etudiant"+this.myEtudiant.nom);
  };*/



  /**
   *vider les champs
   *
   * @memberof AjouterparticipantComponent
   */
  reset() {
    this.myParticipant = {
      nom:'',
      prenom:'',
      dateNaissance:'',
      age:0,
      email:'',
      telephone:''
    }
  }
}
