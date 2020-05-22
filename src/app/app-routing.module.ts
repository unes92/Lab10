import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { HorizontaleComponent } from './navigation/horizontale/horizontale.component';
import { VerticalComponent } from './navigation/vertical/vertical.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditComponent } from  './profil/edit/edit.component';
//import { AjouterparticipantComponent } from './ajouterparticipant/ajouterparticipant.component';



const routes: Routes =  [
  {
    path: 'hr',
    component: HorizontaleComponent
  },
  {
    path: 'vr',
    component: VerticalComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
 /* {
    path: 'Participant',
    component: AjouterparticipantComponent
  },*/
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path:'Etudiants',
    component:ListEtudiantComponent
  }
  
  ,
  {
    path:'profil/:etudiant.id',
    component:ListEtudiantComponent
  },
  {
    path:'profil/edit/:etudiant.id',
    component:EditComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
