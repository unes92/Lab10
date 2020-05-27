import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../Services/Discussion.Service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {Discussion} from '../../models/Discussion';

/**
 * @author : younes
 * classe  FluxComponent : qui affiche la liste des Flux des travaux
 */

@Component({
  selector: 'app-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.css']
})
export class FluxComponent implements OnInit {

  DiscussionId: any;




/**
 *
 *
 *  @type {Discussion[]}  liste des Discussions
 * @memberof FluxComponent
 */
discussions:Discussion[]=[];



/**
 * injection du service 
 */

  constructor(private addService: DiscussionService,private route: ActivatedRoute,private laRoute: Router)
 { 
         
  }

  /**
   *
   *dans intialisation : on va charger la liste etudiants
   * @memberof FluxComponent
   */
  ngOnInit(): void {
       
    this.getAllDiscussions();
 

};


       
     
/**
 *afficher yous les discussions
 *
 * @memberof FluxComponent
 */
getAllDiscussions() {
       this.discussions=[];
        this.addService.findAll2<Discussion>("Discussions").subscribe(d => this.discussions = d);
        console.log(this.discussions);
      }



            
    

      

}
