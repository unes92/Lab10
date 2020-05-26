import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HorizontaleComponent } from './navigation/horizontale/horizontale.component';
import { VerticalComponent } from './navigation/vertical/vertical.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProfilComponent } from './profil/profil.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AjouterparticipantComponent } from './participant/ajouterparticipant/ajouterparticipant.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditComponent } from './profil/edit/edit.component';
import { ListParticipantsComponent } from './participant/list-participants/list-participants.component';
import { EditParticipantComponent } from './participant/edit-participant/edit-participant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './Travaux/add/add.component';
import { ListComponent } from './Travaux/list/list.component';
import {MatCardModule} from '@angular/material/card';
import { AjoutmsgComponent } from './discussion/ajoutmsg/ajoutmsg.component';
import { FluxComponent } from './discussion/flux/flux.component';
import { DiscussionComponent } from './discussion/discussion.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HorizontaleComponent,
    VerticalComponent,
    ProfilComponent,
    ListEtudiantComponent,
    EditComponent,
    AjouterparticipantComponent,
    ListParticipantsComponent,
    EditParticipantComponent,
    AddComponent,
    ListComponent,
    AjoutmsgComponent,
    FluxComponent,
    DiscussionComponent

  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    MatCardModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
