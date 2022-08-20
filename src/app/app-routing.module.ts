import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinkTwoComponent } from './pages/link-two/link-two.component';
import { LinkThreeComponent } from './pages/link-three/link-three.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'link-two', component: LinkTwoComponent},
  {path: 'link-three', component: LinkThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
