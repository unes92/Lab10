import { Component, OnInit } from '@angular/core';
import { TravailService } from '../../Services/travail.service';
import {Travail } from '../../models/Travail';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * @author : younes
 * classe  ListComponent : qui affiche tous les travaux
 */



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private addService: TravailService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllTravaux();
  }


  Travaux:Travail[]=[];


  /**
   *afficher tous les travaux
   *
   * @memberof ListComponent
   */
  getAllTravaux() {
  
    this.addService.findAll2<Travail>("Travaux").subscribe(t => this.Travaux = t);
  }
}
