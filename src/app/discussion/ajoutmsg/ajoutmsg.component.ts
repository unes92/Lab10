import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DiscussionService } from '../../Services/Discussion.Service';
import {Discussion } from '../../models/Discussion';
import {Router} from '@angular/router';
/**
 * @author : younes
 * classe  AjoutmsgComponent : qui ajout un nouveau msg a la discussion
 */
@Component({
  selector: 'app-ajoutmsg',
  templateUrl: './ajoutmsg.component.html',
  styleUrls: ['./ajoutmsg.component.css']
})
export class AjoutmsgComponent implements OnInit {

  myDiscussion: Discussion = {
    content:'',
    dateMsg:''
  }

  discussions : Discussion[]=[];

  constructor(private addService: DiscussionService,private laRoute: Router) { }


  ngOnInit(): void {
  }

 


/**
 *ajout d'un nouveau message
 *
 * @memberof AjoutmsgComponent
 */
ajoutMessage(){
    console.log("myDiscussion");
    console.log(this.myDiscussion);

  

let da=new Date();
this.myDiscussion.dateMsg=da.toString();

   this.addService.addobject<Discussion>(this.myDiscussion,"Discussions").subscribe(()=>
   {
      
    // D=> this.discussions = [D, ...this.discussions];

      this.laRoute.navigate(['/Discussion']);
      this.getAllDiscussions();
      this.reset();
   }  
      );


  };


  getAllDiscussions() {
    this.discussions=[];
     this.addService.findAll2<Discussion>("Discussions").subscribe(d => this.discussions = d);
     console.log(this.discussions);
   }

 /**
   *vider les champs
   *
   * @memberof myDiscussion
   */
  reset() {
    this.myDiscussion = {
      content:'',
      dateMsg:''
    }
  }



}
