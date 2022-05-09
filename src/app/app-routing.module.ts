import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { ArtistComponent } from "./components/artist/artist.component";

const routes: Routes = [
  // {  path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {  path: '', component: HomeComponent, pathMatch: 'full' },
  {  path: 'about', component: AboutComponent, pathMatch: 'full' },
  {  path: 'artists/:id', component: ArtistComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }