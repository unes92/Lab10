import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { HorizontaleComponent } from './navigation/horizontale/horizontale.component';
import { VerticalComponent } from './navigation/vertical/vertical.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AjouterparticipantComponent } from './ajouterparticipant/ajouterparticipant.component';



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
  {
    path: 'Participant',
    component: AjouterparticipantComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
