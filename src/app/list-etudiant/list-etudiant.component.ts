import { Component, OnInit } from '@angular/core';
import { ServiceEtudiantService } from '../Services/service-etudiant.service';
import {Etudiant } from '../models/etudiant';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
/**
 * @author : younes
 * classe  ListEtudiantComponent : qui affiche la liste des etudiants
 */


@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  EtudiantId: any;



/**
 *
 *
 * @type {Etudiant[]}  liste des etudiants
 * @memberof ListEtudiantComponent
 */
Etudiants:Etudiant[]=[];



/**
 * injection du service 
 */

  constructor(private addService: ServiceEtudiantService,private route: ActivatedRoute,private laRoute: Router,private modalService: NgbModal) { 
  
  
       
  }

  /**
   *dans intialisation : on va charger la liste etudiants
   *
   * @memberof ListEtudiantComponent
   */
  ngOnInit(): void {
       
        this.getAllEtudiants();
     

     
          this.route.paramMap.subscribe(res => {
          this.EtudiantId = res.get('etudiant.id');
          console.log(this.EtudiantId);
         



       /*   if(this.EtudiantId)
          {
            this.deleteEtudiants(this.EtudiantId);
            console.log(" if ");
          }*/
   });


       }
     
       
/**
 *  getAllEtudiants() : methode qui recupere la liste des etudiants dans un tableau Etudiants
 */
      getAllEtudiants() {
  
        this.addService.findAll<Etudiant>().subscribe(etudiants => this.Etudiants = etudiants);
      }



            
/**
 *  deleteEtudiants() : methode qui supprime un etudiant
 */
      deleteEtudiants(id) {
  
        this.addService.delete(id).subscribe(s => {
         // console.log(s);
         this.getAllEtudiants();
         this.laRoute.navigate(['Etudiants']);
        });
      
       

      //  console.log(" deleteEtudiants  id ",id);
    /*    this.getAllEtudiants();

        this.laRoute.navigate(['Etudiants']);*/
      }

      
      closeResult = '';
      
      open(content,id) {

      
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.deleteEtudiants(id);
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }


    
    
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }
}
