import { PortfolioComponent } from './components/layouts/portfolio/portfolio.component';
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
import { ContactComponent } from './components/layouts/contact/contact.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { WhyWeDifferentComponent } from './components/layouts/why-we-different/why-we-different.component';
import { FunfactsTwoComponent } from './components/layouts/funfacts-two/funfacts-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeTwelveComponent } from './components/pages/home-twelve/home-twelve.component';
import {HttpClientModule } from '@angular/common/http';
import { PricingComponent } from './components/layouts/pricing/pricing.component';

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
    ContactComponent,
    PricingComponent,
    AboutComponent,
    WhyWeDifferentComponent,
    FunfactsTwoComponent,
    ErrorComponent,
    PortfolioComponent
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
