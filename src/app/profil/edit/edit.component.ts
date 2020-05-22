import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ServiceEtudiantService } from '../../service-etudiant.service';
import {Etudiant } from '../../models/etudiant';
import { ActivatedRoute } from '@angular/router';

/**
 * @author : younes
 * classe  EditComponent : qui modifier le profil
 */



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {


  /**
   *
   *definition du modele myEtudiant qu'on va utliser pour relier le TS avec DOM
   * @type {Etudiant}
   * @memberof EditComponent
   */




  myEtudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    telephone:''
    
  }

  /**
   *EtudiantId : on va l'utliser pour recuperer param du l'url edit
   *
   * @type {*}
   * @memberof EditComponent
   */
  EtudiantId: any;







  /**
   *Creates an instance of EditComponent.  : injection du service + activated route(recupere les params)
   * @param {ServiceEtudiantService} addService
   * @memberof ProfilComponent
   */
  constructor(private addService: ServiceEtudiantService,private route: ActivatedRoute) { 

  }

/**
 *init du composant : on recupere le param etudiant.id de la requete et on execute la methode getuser()
 *
 * @memberof EditComponent
 */
ngOnInit(): void {

    this.route.paramMap.subscribe(res => {
      this.EtudiantId = res.get('etudiant.id');
      console.log("update "+this.EtudiantId);
      this.getEtudiant();
});


  }

  /**
   *methode qui retourne un etudiant d'apres son id
   *
   * @memberof EditComponent
   */
  getEtudiant() {
    console.log("getuser etudiant id "+this.EtudiantId);
    this.addService.getEtudiant(this.EtudiantId).subscribe(data => {
 
      this.myEtudiant=data;
     

     console.log(data);
    });

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




  modifierEtudiant() {
    console.log("this.EtudiantId "+this.EtudiantId);

    this.addService.getEtudiant(this.EtudiantId).subscribe(data => {

      console.log("this.myEtudiant ");
      console.log(this.myEtudiant);
      console.log("data ");
      console.log(data);

      data =  this.myEtudiant;

      console.log(" updated this.myEtudiant ");
      console.log(this.myEtudiant);
      console.log(" updated data ");

      console.log(data);

     // this.user.age = 'Updated Age';
      this.addService.updateEtudiant(data).subscribe(data1 => {
        this.addService.findAll();

        console.log("data1 ");
        console.log(data1);

      });
    });
  }





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




  



}
