import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ServiceParticipantService } from '../../Services/service-participant.service';
import {Participant } from '../../models/participant';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

/**
 *
 *@author younes
 * @export
 * @class EditParticipantComponent  : service du composant participant
 */
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {


  /**
   *
   *definition du modele myEtudiant qu'on va utliser pour relier le TS avec DOM
   * @type {Etudiant}
   * @memberof EditComponent
   */




  myParticipant: Participant = {
    nom:'',
    prenom:'',
    dateNaissance:'',
    age:0,
    email:'',
    telephone:''
  }


  /**
   *ParticipantId : on va l'utliser pour recuperer param du l'url edit
   *
   * @type {*}
   * @memberof EditComponent
   */
  ParticipantId: any;







  /**
   *Creates an instance of EditComponent.  : injection du service + activated route(recupere les params)
   * @param {ServiceParticipantService} addService
   * @memberof ProfilComponent
   */
  constructor(private addService: ServiceParticipantService,private route: ActivatedRoute,private laRoute:Router) { 

  }

/**
 *init du composant : on recupere le param Participant.id de la requete et on execute la methode getParticipant()
 *
 * @memberof EditComponent
 */
ngOnInit(): void {

    this.route.paramMap.subscribe(res => {
      this.ParticipantId = res.get('participant.id');
      console.log("update "+this.ParticipantId);
      this.getParticipant();
});


  }

  /**
   *methode qui retourne un Participant d'apres son id
   *
   * @memberof EditComponent
   */
  getParticipant() {
    console.log(" getParticipant id "+this.ParticipantId);
    this.addService.getParticipant(this.ParticipantId).subscribe(data => {
 
      this.myParticipant=data;
     

     console.log(data);
    });

  }
  




/**
 *
 *definiton validator email
 * @memberof EditParticipantComponent
 */
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);







/**
 *
 *modifier participant : methode qui fait la modification d'un participant
 * @memberof EditParticipantComponent
 */
modifierParticipant() {
    console.log("this.ParticipantId "+this.myParticipant);


    let datenaiss: Date = new Date(this.myParticipant.dateNaissance);  
    let date: Date = new Date();  
    let age=date.getFullYear()-datenaiss.getFullYear();
    
    this.myParticipant.age=age;


    this.addService.getParticipant(this.ParticipantId).subscribe(data => {

      console.log("this.myEtudiant ");
      console.log(this.myParticipant);
      console.log("data ");
      console.log(data);

      data =  this.myParticipant;

      console.log(" updated this.myEtudiant ");
      console.log(this.myParticipant);
      console.log(" updated data ");

      console.log(data);

     // this.user.age = 'Updated Age';
      this.addService.updateParticipant(data).subscribe(data1 => {
        this.addService.findAll();
        this.laRoute.navigate(['/Participant/list']);
        console.log("data1 ");
        console.log(data1);

      });
    });
   
   
  }






  /**
   *vider les champs
   *
   * @memberof EditParticipantComponent
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
