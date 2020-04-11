import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { TeamComponent } from './components/layouts/team/team.component';
import { TestimonialComponent } from './components/layouts/testimonial/testimonial.component';
import { CtaComponent } from './components/layouts/cta/cta.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { PartnerComponent } from './components/layouts/partner/partner.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { WhyWeDifferentComponent } from './components/layouts/why-we-different/why-we-different.component';
import { FaqComponent } from './components/layouts/faq/faq.component';
import { FunfactsTwoComponent } from './components/layouts/funfacts-two/funfacts-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeTwelveComponent } from './components/pages/home-twelve/home-twelve.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeTwelveComponent,
    TeamComponent,
    TestimonialComponent,
    CtaComponent,
    SubscribeComponent,
    ContactComponent,
    PartnerComponent,
    AboutComponent,
    WhyWeDifferentComponent,
    FaqComponent,
    FunfactsTwoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
