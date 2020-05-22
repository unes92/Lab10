import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PictureServiceService } from '../picture-service.service';
import {Employe } from '../models/employe';





@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 // profilForm: FormGroup;

  
  myEmployee: Employe = {
    nom:'',
    prenom:'',
    email:'',
    telephone:''
  }
  emp:Employe;
  Employes: Employe[];

  
  ngOnInit(): void {
  }
 
  constructor(private addService: PictureServiceService) { 
  
this.Employes=[];
   
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  ajoutEmployee(){
    this.addService.addEmployee(this.myEmployee).subscribe((employe) => {
      this.Employes = [employe, ...this.Employes];
    });


    console.log("nom employe"+this.myEmployee.nom);
  };

  reset() {
    this.myEmployee = {
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
      console.log("nom employe"+this.myEmployee.nom);
    //  this.services.createEmployee(this.emp);
    this.addService.msg(data);
        }

  
}
