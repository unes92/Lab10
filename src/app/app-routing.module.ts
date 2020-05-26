import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { HorizontaleComponent } from './navigation/horizontale/horizontale.component';
import { VerticalComponent } from './navigation/vertical/vertical.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditComponent } from  './profil/edit/edit.component';
import { AjouterparticipantComponent } from './participant/ajouterparticipant/ajouterparticipant.component';
import { ListParticipantsComponent } from './participant/list-participants/list-participants.component';
import { EditParticipantComponent } from './participant/edit-participant/edit-participant.component';
import { ListComponent } from './Travaux/list/list.component';
import { AddComponent } from './Travaux/add/add.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FluxComponent } from './discussion/flux/flux.component';
import { AjoutmsgComponent } from './discussion/ajoutmsg/ajoutmsg.component';

const routes: Routes =  [
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path:'Etudiants',
    component:ListEtudiantComponent
  },
  {
    path:'profil/:etudiant.id',
    component:ListEtudiantComponent
  },
  {
    path:'profil/edit/:etudiant.id',
    component:EditComponent
  },
  {
    path: 'Participant/add',
    component: AjouterparticipantComponent
  },
  {
    path: 'Participant/list',
    component: ListParticipantsComponent
  },
  {
    path:'Participant/edit/:participant.id',
    component:EditParticipantComponent
  },
  {
    path:'Travaux/list',
    component:ListComponent
  },
  {
    path:'Travaux/add',
    component:AddComponent
  },
  {
    path:'Discussion',
    component:DiscussionComponent
  },
  {
    path:'Discussion/flux',
    component:FluxComponent
  },
  {
    path:'Discussion/add',
    component:AjoutmsgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
