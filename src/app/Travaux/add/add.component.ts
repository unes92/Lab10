import { Component, OnInit } from '@angular/core';
import { TravailService } from '../../Services/travail.service';

import {Travail } from '../../models/Travail';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

/**
 * @author : younes
 * classe  AddComponent : qui ajout un nouveau travail
 */

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private addService: TravailService) { }

  ngOnInit(): void {
  }

  mytravail: Travail={
    titreTravail: '',
    descriptionTravail: '',
    lienvideo: ''
  };


  Travaux: Travail[];


  /**
   *ajouter un travail/cours
   *
   * @memberof AddComponent
   */
  ajoutTravail()
  {
   
  
 
    let url = this.mytravail.lienvideo.replace("watch?v=", "embed/");
    this.mytravail.lienvideo=url;


    console.log(this.mytravail.lienvideo);

    console.log(url);
    this.addService.addobject<Travail>(this.mytravail,"Travaux").subscribe(
      t => this.Travaux = [t,...this.Travaux]);
    
    console.log(" travail 1"+this.Travaux[0].titreTravail);
    
    console.log("mytravail"+this.mytravail.descriptionTravail);
  //  this.laRoute.navigate(['/Etudiants']);
  }
}
