import { Component, OnInit } from '@angular/core';
import { ServiceParticipantService } from '../../Services/service-participant.service';
import {Participant } from '../../models/participant';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.css']
})
export class ListParticipantsComponent implements OnInit {

  ParticipantId: any;



/**
 *
 *
 * @type {Etudiant[]}  liste des etudiants
 * @memberof ListEtudiantComponent
 */
Participants:Participant[]=[];



/**
 * injection du service 
 */

  constructor(private addService: ServiceParticipantService,private route: ActivatedRoute,private laRoute: Router,private modalService: NgbModal) { 
  
  
       
  }

  /**
   *dans intialisation : on va charger la liste etudiants
   *
   * @memberof ListEtudiantComponent
   */
  ngOnInit(): void {
       
        this.getAllParticipants();
     

     
          this.route.paramMap.subscribe(res => {
          this.ParticipantId = res.get('participant.id');
          console.log(this.ParticipantId);
         



 
   });


       }
     
       
/**
 *  getAllEtudiants() : methode qui recupere la liste des etudiants dans un tableau Etudiants
 */
      getAllParticipants() {
  
        this.addService.findAll<Participant>().subscribe(participants => 
          
          this.Participants = participants
          

          
          //this.Participants.filter("dataNaissance")
        /*this.Participants.filter(participant=> 
            participant.dateNaissance=((new Date().getFullYear() - new Date(participant.dateNaissance).getFullYear()).toString())); */  
          );
      }



            
/**
 *  deleteEtudiants() : methode qui supprime un etudiant
 */
      deleteParticipants(id) {
  
        //let slach=document.getElementById("delete").getAttribute("href").lastIndexOf("/");
        //let lenght=document.getElementById("delete").getAttribute("href").length;

       // console.log("documentvalue "+document.getElementById("delete").getAttribute("href").toString());
       // console.log("documentvalue "+document.getElementById("delete").getAttribute("href").substr(slach+1,1));

        this.ParticipantId=id;
       console.log("this.ParticipantId) "+this.ParticipantId);
       console.log("id) "+id);
        this.addService.delete(id).subscribe(s => {
         // console.log(s);
         this.getAllParticipants();
         this.laRoute.navigate(['Participant/List']);
        });
      
       

      //  console.log(" deleteEtudiants  id ",id);
    /*    this.getAllEtudiants();

        this.laRoute.navigate(['Etudiants']);*/
      }


     

      closeResult = '';


    
      open(content,id) {

      
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.deleteParticipants(id);
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
