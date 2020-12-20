import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { charactersComponent } from './characters/characters.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'characters', component: charactersComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }