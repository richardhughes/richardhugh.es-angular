import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfileSectionComponent} from './profile-section/profile-section.component';

const routes: Routes = [
    { path: '', component: ProfileSectionComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
