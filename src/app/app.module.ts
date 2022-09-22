import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { HomeRandomUserComponent } from './components/home-random-user/home-random-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkTwoComponent } from './pages/link-two/link-two.component';
import { HomeComponent } from './pages/home/home.component';
import { LinkTwoHeroComponent } from './components/link-two-hero/link-two-hero.component';
import { LinkTwoRandomUserComponent } from './components/link-two-random-user/link-two-random-user.component';
import { LinkThreeComponent } from './pages/link-three/link-three.component';
import { LinkThreeHeroComponent } from './components/link-three-hero/link-three-hero.component';
import { LinkThreeRandomUserComponent } from './components/link-three-random-user/link-three-random-user.component';
import { LinkFourComponent } from './pages/link-four/link-four.component';
import { LinkFourHeroComponent } from './components/link-four-hero/link-four-hero.component';
import { LinkFourRandomUserComponent } from './components/link-four-random-user/link-four-random-user.component';
import { LinkFourOpenApiComponent } from './components/link-four-open-api/link-four-open-api.component';
import { LinkThreeOpenApiComponent } from './components/link-three-open-api/link-three-open-api.component';
import { LinkTwoOpenApiComponent } from './components/link-two-open-api/link-two-open-api.component';
import { HomeOpenApiComponent } from './components/home-open-api/home-open-api.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorCardComponent } from './components/error-card/error-card.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeHeroComponent,
    HomeRandomUserComponent,
    LinkTwoComponent,
    HomeComponent,
    LinkTwoHeroComponent,
    LinkTwoRandomUserComponent,
    LinkThreeComponent,
    LinkThreeHeroComponent,
    LinkThreeRandomUserComponent,
    LinkFourComponent,
    LinkFourHeroComponent,
    LinkFourRandomUserComponent,
    LinkFourOpenApiComponent,
    LinkThreeOpenApiComponent,
    LinkTwoOpenApiComponent,
    HomeOpenApiComponent,
    FooterComponent,
    LoaderComponent,
    ErrorCardComponent,
    ContactUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
