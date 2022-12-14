import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinkTwoComponent } from './pages/link-two/link-two.component';
import { LinkThreeComponent } from './pages/link-three/link-three.component';
import { LinkFourComponent } from './pages/link-four/link-four.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'link-two', component: LinkTwoComponent},
  {path: 'link-three', component: LinkThreeComponent},
  {path: 'link-four', component: LinkFourComponent},
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  // Note: Use the useHash: true for Github pages
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
